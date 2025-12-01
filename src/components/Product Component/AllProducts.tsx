// import HeroSection from "../Hero Section/HeroSection";
import Loading from "../Loading Component/Loading";
import Product from "./Product";
import { allProducts, titleOurProducts } from "../../Data/AllProducts_Data";
import { motion, easeOut } from "framer-motion";

import { useState, useEffect, useMemo } from "react";
import Button from "../ui/Button";
import { FaChevronDown } from "react-icons/fa";

interface ProductType {
  id: number;
  name: string;
  Desc: string;
  category: string;
  subCategory?: string;
  img: string;
  availableColors: string[];
  After_Discount: number;
  Pre_Discount: number | null;
  quantity: string | null;
  imgHover: string;
  video: string;
}

export default function AllProducts() {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCards, setVisibleCards] = useState(12);
  const [sortOrder, setSortOrder] = useState<"" | "lowToHigh" | "highToLow">(
    ""
  );

  //! Memoized sorted & sliced products for optimized rendering
  const sortedAndVisibleProducts = useMemo(() => {
    const sorted = [...allProducts];

    if (sortOrder === "lowToHigh") {
      sorted.sort((a, b) => a.After_Discount - b.After_Discount);
    } else if (sortOrder === "highToLow") {
      sorted.sort((a, b) => b.After_Discount - a.After_Discount);
    }

    return sorted.slice(0, visibleCards);
  }, [sortOrder, visibleCards]);

  function handleVisibleCards() {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCards((prev) => prev + 10);
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setProducts(sortedAndVisibleProducts);
  }, [sortedAndVisibleProducts]);

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortOrder(e.target.value as "lowToHigh" | "highToLow" | "");
  }

  const hasMore = visibleCards < allProducts.length;

  return (
    <>
      {products ? (
        <section className="sm:px-10 xs:px-5 xs:pt-[105px] lg:pt-32 pb-8 overflow-hidden">
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
              <div className="h-[3.1px] w-[90%] mx-auto mt-1 bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
            </motion.div>

            {/* Sorting Dropdown */}
            <motion.div
              className="mb-6 flex xs:items-start md:items-center justify-between md:gap-3 xs:gap-2 xs:flex-col md:flex-row"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: easeOut }}>
              <label
                htmlFor="sortPrice"
                className="font-semibold text-gray-700 whitespace-nowrap md:text-xl xs:text-lg text-start">
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

          {/* Displaying the products */}
          <motion.div
            className="pb-8 gap-7 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut, delay: 0.5 }}>
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                <Product product={product} />
              </div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {hasMore && (
            <motion.div
              onClick={handleVisibleCards}
              className="flex justify-center items-center w-fit mx-auto pb-5 cursor-pointer"
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

          {/* Viewed Products Count */}
          <motion.div
            className="w-fit mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut, delay: 0.5 }}>
            <p className="text-lg text-center text-gray-700">{`You have viewed ${
              visibleCards >= allProducts.length
                ? allProducts.length
                : visibleCards
            } out of ${allProducts.length} products.`}</p>
          </motion.div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
