import { useParams } from "react-router-dom";
import { allProducts, titleOurProducts } from "../../Data/AllProducts_Data";
import Button from "../ui/Button";
import { useMemo, useState } from "react";
import Product from "../Product Component/Product";
import { motion, easeOut } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function CategoryFiltration() {
  const { categoryName } = useParams();

  const [visibleCards, setVisibleCards] = useState(4);

  const [isLoading, setIsLoading] = useState(false);

  const [sortOrder, setSortOrder] = useState<"" | "lowToHigh" | "highToLow">(
    ""
  );

  const filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === categoryName?.toLowerCase()
  );

  const hasMore = visibleCards < filteredProducts.length;

  //! Memoized sorted & sliced products for optimized rendering
  const sortedAndVisibleProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    if (sortOrder === "lowToHigh") {
      sorted.sort((a, b) => a.After_Discount - b.After_Discount);
    } else if (sortOrder === "highToLow") {
      sorted.sort((a, b) => b.After_Discount - a.After_Discount);
    }

    return sorted.slice(0, visibleCards);
  }, [sortOrder, visibleCards, filteredProducts]);

  function handleVisibleCategories() {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCards((prev) => prev + 4);
      setIsLoading(false);
    }, 2000);
  }

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortOrder(e.target.value as "lowToHigh" | "highToLow" | "");
  }

  return (
    <>
      <section
        id="category-filtration"
        className="sm:px-10 xs:px-5 pb-8 xs:pt-[105px] lg:pt-32 overflow-hidden">
        <div className="flex justify-between md:items-center xs:items-start">
          {/* Title Part */}
          <motion.div
            className="mb-4 inline-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut }}>
            <h2 className="lg:text-4xl text-start md:text-3xl xs:text-2xl font-bold text-[#124030]">
              {titleOurProducts.title}
            </h2>
            <div className="h-[3px] w-[90%] mx-auto mt-1 bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
          </motion.div>

          {/* Sorting Dropdown */}
          <motion.div
            className="mb-6 flex md:items-center xs:items-start justify-between md:gap-3 xs:gap-2 xs:flex-col md:flex-row"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut }}>
            <label
              htmlFor="sortPrice"
              className="font-semibold text-gray-700 whitespace-nowrap md:text-xl xs:text-lg">
              Sort by Price:
            </label>

            <div className="relative w-full ">
              <select
                id="sortPrice"
                value={sortOrder}
                onChange={handleSortChange}
                className="w-full p-2 pl-3 pr-8 rounded-md shadow-sm
                 focus:outline-none ring-2 ring-[#124030]
                 transition duration-150 appearance-none">
                <option value="">Default</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>

              <FaChevronDown
                className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={14}
              />
            </div>
          </motion.div>
        </div>

        {/* Displaying the categories. */}
        <motion.div
          className="pb-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeOut, delay: 0.5 }}>
          {sortedAndVisibleProducts.map((product, index) => (
            <div
              key={product.id || index}
              className="border-2 bg-white rounded-lg w-full">
              <Product product={product} />
            </div>
          ))}
        </motion.div>

        {/* Load More Button! */}
        {hasMore && (
          <motion.div
            onClick={handleVisibleCategories}
            className="flex justify-center items-center pb-5 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut }}>
            <Button
              type="button"
              titleHovering={isLoading ? "Loading" : "Load More"}
              title={isLoading ? "load" : "Load More"}
              classNameArrows="rotate-90"
            />
          </motion.div>
        )}

        {/* Displaying the number of products viewed. */}
        <motion.div
          className="w-fit mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeOut, delay: 0.5 }}>
          <p className="text-lg text-center text-gray-700">{`You have viewed ${
            visibleCards >= filteredProducts.length
              ? filteredProducts.length
              : visibleCards
          } out of ${filteredProducts.length} products.`}</p>
        </motion.div>
      </section>
    </>
  );
}
