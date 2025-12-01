import { Link } from "react-router-dom";
import { scrollToTop } from "../ui/utils";
import { categories, titleCategories } from "../../Data/Category_Data";
import Button from "../ui/Button";
import { useState } from "react";
import { motion, easeOut } from "framer-motion";

export default function Categories() {
  const [visibleCards, setVisibleCards] = useState(4);

  const [isLoading, setIsLoading] = useState(false);

  const visibleCategories = categories.slice(0, visibleCards);

  const hasMore = visibleCards < categories.length;

  function handleVisibleCategories() {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCards((prev) => prev + 5);
      setIsLoading(false);
    }, 2000);
  }

  return (
    <>
      <section className="sm:px-10 xs:px-5 xs:pt-[105px] lg:pt-32 pb-8 overflow-hidden">
        {/* Title Part! */}
        <motion.div
          className="mb-10 inline-block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeOut }}>
          <h2 className="lg:text-4xl text-start md:text-3xl xs:text-2xl font-bold text-[#124030]">
            {titleCategories.title}
          </h2>
          <div className="h-[3px] w-[90%] mx-auto mt-1 bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
        </motion.div>

        {/* Displaying the categories. */}
        <motion.div
          className="pb-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeOut }}>
          {visibleCategories?.map((category, index) => (
            <div key={index}>
              <div className="relative overflow-hidden rounded-3xl shadow-location hover:shadow-lg hover:scale-105 group/text transition-all duration-500 ease-in-out cursor-pointer">
                <Link
                  to={`/categories/${category.categoryName}`}
                  title={category.title}
                  onClick={() => scrollToTop()}>
                  <img
                    className="w-full h-64 object-contain"
                    src={category.src}
                    alt={category.alt}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/35 hover:bg-black/0 transition-all duration-500 ease-in-out">
                    <div className="absolute left-5 top-5">
                      <h2 className="text-xl text-white border-b-[3px] bg-black/45 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover/text:-translate-y-16 border-[var(--primary-color)] rounded-md p-1 pb-0">
                        {category.categoryName}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {hasMore && (
          <motion.div
            onClick={handleVisibleCategories}
            className="flex justify-center items-center pb-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: easeOut }}>
            <Button
              type="button"
              titleHovering="Load More"
              title={isLoading ? "load" : "Load More"}
              classNameArrows="rotate-90"
            />
          </motion.div>
        )}

        {/* Displaying the number of categories viewed. */}
        <motion.div
          className="w-fit mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: easeOut, delay: 0.5 }}>
          <p className="text-lg text-center text-gray-700">{`You have viewed ${
            visibleCards >= categories.length ? categories.length : visibleCards
          } out of ${categories.length} products.`}</p>
        </motion.div>
      </section>
    </>
  );
}
