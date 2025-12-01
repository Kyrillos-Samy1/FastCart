import { Link } from "react-router-dom";
import Button from "../ui/Button";
import "./Home.css";
import Product from "../Product Component/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Navigation, Pagination } from "swiper/modules";
import { scrollToTop } from "../ui/utils";
import CategorySection from "./Category Section";
import { HomeSectionData } from "../../Data/Home_Data.tsx";
import { topProduct } from "../../Data/Home_Data.tsx";
import { titleTopProduct } from "../../Data/Home_Data.tsx";
import { topCategories } from "../../Data/Home_Data.tsx";
import { titleTopCategories } from "../../Data/Home_Data.tsx";
import { locations } from "../../Data/Home_Data.tsx";
import { titleLocation } from "../../Data/Home_Data.tsx";
import { usesFastCart } from "../../Data/Home_Data.tsx";
import { titleUsesFastCart } from "../../Data/Home_Data.tsx";
import { motion, easeOut } from "framer-motion";

export default function Home() {
  //! For Home Section.
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: easeOut }
    }
  };

  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="relative overflow-hidden xs:pt-28 md:pt-0 h-dvh tracking-wider flex items-center justify-center sm:px-16 xs:px-5 bg-[linear-gradient(to_bottom_right,#0a1f17,#0a1f17,#0a1f17,#124030,#124030,#1e5c3c)]">
        <div className="flex items-center justify-between w-full ">
          <div className="1xl:w-[65%] xl:w-[45%] xs:w-full">
            <motion.div
              className="1xl:max-w-[900px] xl:max-w-[500px] md:mt-24 xs:mt-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              <motion.h2
                className="md:text-4xl xs:text-2xl text-pretty text-white/80 mb-10 xs:max-w-[470px] md:max-w-[900px]"
                variants={itemVariants}
                viewport={{ once: true }}>
                {HomeSectionData[0]?.title_h2_first}{" "}
                <span className="text-emerald-400 font-semibold tracking-wide drop-shadow">
                  {HomeSectionData[0]?.title_h2_center}
                </span>{" "}
                {HomeSectionData[0]?.title_h2_last}
              </motion.h2>

              <motion.h3
                className="md:text-2xl xs:text-xl pb-10 text-white/80 md:max-w-[570px] sm:max-w-[470px] xs:w-full"
                variants={itemVariants}
                viewport={{ once: true }}>
                {HomeSectionData[1]?.title_h3_first}{" "}
                <span className="text-emerald-400">
                  {HomeSectionData[1]?.title_h3_center}
                </span>{" "}
                {HomeSectionData[1]?.title_h3_last}
              </motion.h3>

              <motion.h1
                className="md:text-[21px] xs:text-base text-white/80 md:max-w-[570px] sm:max-w-[470px] xs:w-full"
                variants={itemVariants}
                viewport={{ once: true }}>
                {HomeSectionData[2]?.title_h1_first}{" "}
                <span className="text-emerald-400">
                  {HomeSectionData[2]?.title_h1_seconed}
                </span>
                {HomeSectionData[2]?.title_h1_third}{" "}
                <span className="text-emerald-400">
                  {HomeSectionData[2]?.title_h1_forth}
                </span>
                <span className="text-emerald-400">
                  {HomeSectionData[2]?.title_h1_fifth}
                </span>
                {HomeSectionData[2]?.title_h1_last}
              </motion.h1>

              <motion.div
                className="mt-16 w-fit"
                variants={itemVariants}
                viewport={{ once: true }}>
                <Link
                  to={HomeSectionData[3]?.link_button || "/"}
                  onClick={() => scrollToTop()}>
                  <Button
                    title={HomeSectionData[3]?.title_button || "Shop Now"}
                    titleHovering={
                      HomeSectionData[3]?.title_button_hovering || "Go To Shop"
                    }
                    type="button"
                    className="uppercase w-fit text-xl font-medium hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                    classNameIcon="-top-[1.5px]"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Animated floating images */}
          <motion.div
            className="w-[50%] xs:hidden xl:block mt-20 relative z-1 overflow-hidden0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            viewport={{ once: true }}>
            <div className="relative w-[600px] h-[450px] mx-auto z-10">
              {/* Laptop */}
              <motion.img
                className="drop-shadow-2xl origin-bottom-right w-full h-full object-cover"
                src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748675423/gnlgya7s5jggdd7ypvcc.png"
                alt="Laptop FastCart"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
                viewport={{ once: true }}
              />

              {/* Sneakers */}
              <motion.img
                className="absolute top-[90px] -left-[32px] w-[350px] drop-shadow-2xl"
                src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748675075/xkllzqgp0o7mbdtawhx6.png"
                alt="Shoes"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  duration: 2,
                  opacity: { duration: 1, ease: easeOut, delay: 1 },
                  ease: easeOut
                }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>

          {/* Glowing gradient balls */}
          <motion.div
            className="overflow-hidden pointer-events-none absolute blur-sm w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400/10 to-emerald-400/5 -bottom-20 left-0"
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.9, 1, 0.9],
              y: [0, -20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="overflow-hidden pointer-events-none absolute blur-sm w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 -top-5 bottom-26 -right-28"
            animate={{
              scale: [0.9, 1, 0.9],
              opacity: [0.8, 1, 0.8],
              x: [0, 20, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="overflow-hidden pointer-events-none absolute blur-sm w-60 h-60 rounded-full bg-gradient-to-tl from-emerald-400/10 to-emerald-400/5 bottom-0 right-10"
            animate={{
              scale: [0.9, 1, 0.9],
              opacity: [1, 0.8, 1],
              y: [0, 15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </div>
      </section>

      {/* Top Products Section */}
      <section className="xs:pt-12 lg:pt-16 tracking-wider sm:px-10 xs:px-5 bg-white/50 overflow-hidden">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}>
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
              viewport={{ once: true }}>
              <h2 className="lg:text-4xl text-start md:text-3xl xs:text-2xl font-bold text-[#124030]">
                {titleTopProduct.title}
              </h2>
              <div className="h-[3px] w-[90%] mx-auto mt-1 bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
              viewport={{ once: true }}>
              <Link
                to={titleTopProduct.link_button}
                onClick={() => scrollToTop()}>
                <Button
                  title={titleTopProduct.title_button}
                  titleHovering={titleTopProduct.title_button_hovering}
                  type="button"
                />
              </Link>
            </motion.div>
          </div>

          <div className="relative mt-10 md:px-14">
            {/* Shadow Left */}
            <div className="absolute md:left-14 sm:left-0 top-0 h-full sm:w-5 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

            {/* Shadow Right */}
            <div className="absolute md:right-14 sm:right-0 top-0 h-full sm:w-5 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Previous Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
              viewport={{ once: true }}
              className="swiper-topProducts-prev absolute md:left-1 xs:left-0 xs:top-[47%] z-10">
              <Button
                type="button"
                titleHovering="Previous"
                className="swiper-topProducts-prev rounded-full w-10 h-10 py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0"
                classNameArrows="ml-0 rotate-180"
              />
            </motion.div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true,
                el: ".swiper-products-pagination"
              }}
              navigation={{
                prevEl: ".swiper-topProducts-prev",
                nextEl: ".swiper-topProducts-next"
              }}
              breakpoints={{
                300: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 }
              }}
              className="mySwiper">
              {topProduct.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="border-2 bg-white rounded-lg w-full sm:max-w-[340px] ">
                    <Product product={product} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Next Button */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
              viewport={{ once: true }}
              className="swiper-topProducts-next absolute md:right-0 xs:right-0 xs:top-[47%] z-10">
              <Button
                type="button"
                titleHovering="Next"
                className="swiper-topProducts-next rounded-full py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0"
                classNameArrows="ml-0"
              />
            </motion.div>

            <div className="swiper-products-pagination pb-8 pt-8"></div>
          </div>
        </motion.div>
      </section>

      {/* Top Categories Section */}
      <section className="xs:pt-12 lg:pt-16 pb-8 tracking-wider sm:px-10 bg-[#e4e4e4] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}>
          <div className="flex justify-between items-center mb-5 xs:px-5 md:px-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
              viewport={{ once: true }}>
              <h2 className="lg:text-4xl text-start md:text-3xl xs:text-2xl font-bold text-[#124030]">
                {titleTopCategories.title}
              </h2>
              <div className="h-[3px] w-[90%] mx-auto mt-1 bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
              viewport={{ once: true }}>
              <Link
                to={titleTopCategories.link_button}
                onClick={() => scrollToTop()}>
                <Button
                  title={titleTopCategories.title_button}
                  titleHovering={titleTopCategories.title_button_hovering}
                  type="button"
                />
              </Link>
            </motion.div>
          </div>

          <div className="relative md:px-14">
            {/* Shadow Left */}
            <div className="absolute md:left-14 sm:left-0 top-0 h-full sm:w-5 bg-gradient-to-r from-[#e4e4e4]  to-transparent z-10 pointer-events-none" />

            {/* Shadow Right */}
            <div className="absolute md:right-14 sm:right-0 top-0 h-full sm:w-5 bg-gradient-to-l from-[#e4e4e4]  to-transparent z-10 pointer-events-none" />

            {/* Previous Button */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute md:left-1 xs:left-0 xs:top-[45%]">
              <Button
                type="button"
                titleHovering="Previous"
                className="swiper-categories-prev rounded-full w-10 h-10 py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0 xs:ml-2 md:ml-0"
                classNameArrows="ml-0 rotate-180"
              />
            </motion.div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              pagination={{
                clickable: true,
                el: ".swiper-categories-pagination"
              }}
              navigation={{
                prevEl: ".swiper-categories-prev",
                nextEl: ".swiper-categories-next"
              }}
              breakpoints={{
                300: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 }
              }}
              className="mySwiper">
              {topCategories.map((category, index) => (
                <SwiperSlide key={index}>
                  <div className="mb-8 mt-5 w-full md:shadow-location rounded-3xl hover:shadow-lg hover:scale-[1.05] transition-all duration-500 ease-in-out cursor-pointer xs:max-w-[330px] mx-auto">
                    <CategorySection categories={[category]} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Next Button */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute md:right-0 xs:right-0 xs:top-[45%]">
              <Button
                type="button"
                titleHovering="Next"
                className="swiper-categories-next rounded-full py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0 xs:mr-2 md:mr-0"
                classNameArrows="ml-0"
              />
            </motion.div>

            <div className="swiper-categories-pagination"></div>
          </div>
        </motion.div>
      </section>

      {/* Our Locations Section */}
      <section className="xs:pt-12 lg:pt-16 pb-8 tracking-wider sm:px-10 bg-white/50 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-5 xs:px-5 md:px-0">
            <h2 className="lg:text-4xl text-start md:text-3xl xs:text-2xl font-bold text-[#124030]">
              {titleLocation.title}
            </h2>
            <div className="h-[3.5px] w-[90%] mx-auto mt-1 bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
          </motion.div>

          <div className="w-[100%]">
            <div className="relative md:px-14">
              {/* Shadow Left */}
              <div className="absolute md:left-14 sm:left-0 top-0 h-full sm:w-5 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

              {/* Shadow Right */}
              <div className="absolute md:right-14 sm:right-0 top-0 h-full sm:w-5 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              {/* Previous Button */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute md:left-1 xs:left-0 xs:top-[45%] z-10">
                <Button
                  type="button"
                  titleHovering="Previous"
                  className="swiper-location-prev rounded-full w-10 h-10 py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0 xs:ml-2 md:ml-0"
                  classNameArrows="ml-0 rotate-180"
                />
              </motion.div>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-location-pagination"
                }}
                navigation={{
                  prevEl: ".swiper-location-prev",
                  nextEl: ".swiper-location-next"
                }}
                breakpoints={{
                  300: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 }
                }}
                className="mySwiper">
                {locations.map((location, index) => (
                  <SwiperSlide key={index}>
                    <div className="pt-5 pb-8 w-full transition-all duration-500 ease-in-out cursor-pointer xs:max-w-[330px] mx-auto">
                      <div
                        key={index}
                        className="relative overflow-hidden group/text rounded-3xl md:shadow-location hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
                        <Link
                          to={location.linkMaps}
                          target="_blank"
                          title={location.title}>
                          <img
                            className="w-full h-64 object-cover"
                            src={location.src}
                            alt={location.alt}
                          />
                          <div className="absolute top-0 left-0 w-full h-full bg-black/55 hover:bg-black/0 transition-all duration-500 ease-in-out">
                            <div className="absolute left-5 top-5">
                              <h2 className="text-xl text-white bg-black/40 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover/text:-translate-y-16 border-b-[3px] border-[var(--primary-color)] rounded-md p-1 pb-0">
                                {location.countryName}
                              </h2>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Next Button */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute md:-right-1 xs:right-0 xs:top-[45%] z-10">
                <Button
                  type="button"
                  titleHovering="Next"
                  className="swiper-location-next rounded-full py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0 xs:mr-2 md:mr-0"
                  classNameArrows="ml-0"
                />
              </motion.div>

              <div className="swiper-location-pagination"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How To Use FastCart Section */}
      <section className="sm:px-10 xs:px-5 bg-[#e4e4e4] py-16 overflow-hidden">
        {/* How To Use Cart Title. */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeOut, delay: 0.5 }}
          viewport={{ once: true }}
          className="inline-block mb-10">
          <h2 className="lg:text-4xl text-start md:text-3xl xs:text-2xl font-bold text-[#124030]">
            {titleUsesFastCart.title}
          </h2>
          <div className="h-[3px] w-[90%] mx-auto mt-1 bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
        </motion.div>

        {/* How To Use FastCart Content. */}
        <div className="grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4 gap-y-6">
          {usesFastCart.map((use, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-y-2 w-[95%] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: easeOut,
                delay: index * 0.2
              }}
              viewport={{ once: true }}>
              <div className="w-24 h-24 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                <div className="text-[40px] text-white/90">{use.icon}</div>
              </div>
              <h2 className="text-2xl font-extrabold text-center">
                {use.title}
              </h2>
              <p className="text-lg text-center text-[#444]">
                {use.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
