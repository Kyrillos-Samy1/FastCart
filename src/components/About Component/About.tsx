import "./About.css";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import {
  imagesOurJourny_Mission,
  titlrOurJourny_Mission,
  ourExpertise,
  titleOurExpertise,
  OurFounder_Leadership,
  chooseUs,
  titleWhyChooseUs,
  locations,
  titleLocation,
  clientsFeedback,
  titleClientsFeedback
} from "../../Data/About_Data.tsx";

export default function About() {
  return (
    <>
      <section className="sm:px-10 xs:px-5 xs:pt-14 lg:pt-20">
        {/* Our Mission & Our Journey Section */}
        <section className="py-16 sm:-mx-10 xs:-mx-5 tracking-wider sm:px-10 xs:px-5 flex xs:flex-col-reverse xl:flex-row items-start justify-between overflow-hidden">
          {/* Content Part. */}
          <div className="xl:w-[47.5%] flex flex-wrap items-start xs:w-full h-full">
            {/* First Part. */}
            <motion.div
              className="mb-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}>
              <h2 className="shadow-xl text-[#124030] text-3xl mb-5 w-fit border-b-[3px] border-[var(--primary-color)] rounded-md p-1 pb-0">
                {titlrOurJourny_Mission.titleJourny}
              </h2>
              <p className="text-[22px] text-[#676767]">
                {titlrOurJourny_Mission.paraghraphJourny}
              </p>
            </motion.div>

            {/* Second Part. */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}>
              <h2 className="shadow-xl text-[#124030] text-3xl mb-5 w-fit border-b-[3px] border-[var(--primary-color)] rounded-md p-1 pb-0">
                {titlrOurJourny_Mission.titleMission}
              </h2>
              <p className="text-[22px] text-[#676767]">
                {titlrOurJourny_Mission.paraghraphMission}
              </p>
            </motion.div>
          </div>

          {/* Images Part. */}
          <div className="xl:w-[47.5%] xs:w-full xs:mb-7 xl:mb-0 grid grid-cols-2 backdrop-blur-3xl gap-3 rounded-xl">
            {imagesOurJourny_Mission.map((image, index) => (
              <motion.div
                key={index}
                className="shadow-location relative w-full h-full overflow-hidden rounded-xl group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}>
                <img
                  className="w-full h-full object-cover rounded-xl border-[3px] border-[var(--primary-color)]"
                  src={image.src}
                  alt={image.alt}
                  title={image.imgTitle}
                />
                <div
                  className={` ${image.classNameIcon} absolute top-0 left-0 w-full h-full bg-black/30 rounded-xl transition-transform duration-500 ease-in-out translate-y-0`}>
                  <div
                    className={` ${image.classNameOuterIcon} absolute xs:w-8 xs:h-8 md:w-10 md:h-10 text-[var(--primary-color)] rounded-full bg-white/70 backdrop-blur-lg xs:border-[1px] md:border-[3px] border-[var(--primary-color)] flex items-center justify-center`}>
                    {image.icon}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Expertise Section */}
        <section className="sm:-mx-10 xs:-mx-5 xs:px-5 tracking-wider sm:px-10 bg-[#ccc] mb-16 py-10">
          {/* Title Part. */}
          <motion.h2
            className="shadow-xl text-[#124030] text-3xl mb-5 w-fit border-b-[3px] border-[var(--primary-color)] rounded-md p-1 pb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            {titleOurExpertise.title}
          </motion.h2>

          {/* Our Expertise Cards Part. */}
          <div className="grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4">
            {ourExpertise.map((expertise, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-y-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}>
                <h2 className="text-[45px] font-extrabold text-[var(--primary-color)] text-center">
                  {expertise.numberHead}
                </h2>
                <h2 className="text-2xl font-extrabold text-center">
                  {expertise.title}
                </h2>
                <p className="text-lg text-center text-[#444]">
                  {expertise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Founder & Our Leadership Section */}
        <section className="mb-16 flex xs:flex-col-reverse tracking-wider xl:flex-row-reverse items-center justify-between overflow-hidden">
          {/* Content Part. */}
          <div className="xl:w-[47.5%] xs:w-full h-full">
            {/* First Part. */}
            <motion.div
              className="mb-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}>
              <h2 className="shadow-xl text-[#124030] text-3xl mb-5 w-fit border-b-[3px] border-[var(--primary-color)] rounded-md p-1 pb-0">
                {OurFounder_Leadership.titleFounder}
              </h2>
              <p className="text-[22px] text-[#676767]">
                {OurFounder_Leadership.paraghraphFounder}
              </p>
            </motion.div>

            {/* Second Part. */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}>
              <h2 className="shadow-xl text-[#124030] text-3xl mb-5 w-fit border-b-[3px] border-[var(--primary-color)] rounded-md p-1 pb-0">
                {OurFounder_Leadership.titleLeadership}
              </h2>
              <p className="text-[22px] text-[#676767]">
                {OurFounder_Leadership.paraghraphLeadership}
              </p>
            </motion.div>
          </div>

          {/* Image Part. */}
          <motion.div
            className="h-full xl:w-[47.5%] xs:w-full xs:mb-7 xl:mb-0 rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            <img
              className="h-full w-full object-cover rounded-xl"
              src={OurFounder_Leadership.src}
              alt={OurFounder_Leadership.alt}
              title={OurFounder_Leadership.imgTitle}
            />
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="sm:-mx-10 xs:-mx-5 xs:px-5 tracking-wider sm:px-10 bg-[#ccc] py-10 ">
          {/* Title Part. */}
          <motion.h2
            className="shadow-xl text-[#124030] text-3xl mb-10 w-fit border-b-[3px] border-[var(--primary-color)] rounded-md p-1 pb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            {titleWhyChooseUs.title}
          </motion.h2>

          {/* Why Choose Us Cards Part. */}
          <div className="grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4 ">
            {chooseUs.map((choose, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}>
                <div className="w-24 h-24 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                  <img className="w-[60%]" src={choose.src} alt={choose.alt} />
                </div>
                <h2 className="text-2xl font-extrabold text-center">
                  {choose.title}
                </h2>
                <p className="text-lg text-center text-[#444]">
                  {choose.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Locations Section */}
        <section className="locations py-10 sm:-mx-10 xs:-mx-5 tracking-wider sm:px-10 bg-white overflow-hidden">
          {/* Title Part. */}
          <motion.h2
            className="shadow-lg mb-5 sm:-mx-10 text-[#124030] text-3xl w-fit border-b-[3px] border-[var(--primary-color)] rounded-md p-1 pb-0 xs:mx-5 md:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            {titleLocation.title}
          </motion.h2>

          {/* Locations Slider & Arrows Part. */}
          <motion.div
            className="w-[100%] bg-white md:px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            <div className="relative md:-mx-0 ">
              {/* Shadow Left */}
              <div className="absolute left-0 top-0 h-full sm:w-5 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

              {/* Shadow Right */}
              <div className="absolute right-0 top-0 h-full sm:w-5 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              {/* Previous Button */}
              <motion.button
                type="button"
                title="Previous"
                className="absolute md:-left-10 sm:-left-5 xs:left-0 xs:top-[45%] z-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}>
                <Button
                  type="button"
                  titleHovering="Previous"
                  className="swiper-location-prev rounded-full w-10 h-10 py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0 xs:ml-2 md:ml-0"
                  classNameArrows="ml-0 rotate-180"
                />
              </motion.button>

              {/* Slider Part. */}
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
                    <div className="mt-5 mb-10 transition-all duration-500 ease-in-out cursor-pointer xs:max-w-[300px] sm:max-w-[330px] mx-auto">
                      <div
                        key={index}
                        className="relative h-60 overflow-hidden group/text rounded-3xl md:shadow-location hover:shadow-lg xs:scale-[1.11] sm:scale-100 xs:hover:scale-[1.17] sm:hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
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

              {/* Next Button. */}
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                type="button"
                title="Next"
                className="absolute md:-right-10 sm:-right-5 xs:right-0 xs:top-[45%] z-10">
                <Button
                  type="button"
                  titleHovering="Next"
                  className="swiper-location-next rounded-full py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0 xs:mr-2 md:mr-0"
                  classNameArrows="ml-0"
                />
              </motion.button>

              <div className="swiper-location-pagination"></div>
            </div>
          </motion.div>
        </section>

        {/* Clients Feedback Section */}
        <section className="sm:-mx-10 xs:-mx-5 xs:px-5 sm:px-10 tracking-wider pt-8 pb-6 bg-[#ccc] overflow-hidden">
          {/* Title Part. */}
          <motion.h2
            className="shadow-xl text-[#124030] mb-5 text-3xl w-fit border-b-[3px] border-[var(--primary-color)] rounded-md p-1 pb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            {titleClientsFeedback.title}
          </motion.h2>

          {/* Clients Feedback Slider Part. */}
          <motion.div
            className="w-full relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}>
            {/* Shadow Left */}
            <div className="absolute left-0 top-0 h-full xs:w-1 md:w-5 bg-gradient-to-r from-[#ccc] to-transparent z-10 pointer-events-none" />

            {/* Shadow Right */}
            <div className="absolute right-0 top-0 h-full xs:w-1 md:w-5 bg-gradient-to-l from-[#ccc] to-transparent z-10 pointer-events-none" />

            {/* Slider Part. */}
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={50}
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
                el: ".swiper-feedback-pagination"
              }}
              breakpoints={{
                300: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
                1280: { slidesPerView: 4 }
              }}
              className="mySwiper">
              {clientsFeedback.map((feedback, index) => (
                <SwiperSlide
                  key={index}
                  className="h-full 1xl:ml-14 xl:ml-28 lg:-ml-20">
                  <div className="md:h-[330px] xs:h-[400px] sm:w-[400px] xs:w-[320px] flex flex-col justify-between mx-auto cursor-pointer p-5 mt-5 mb-10 bg-white rounded-xl shadow-md transition duration-500 ease-in-out border-2 border-gray-300">
                    <p className="text-lg text-[#676767]">{feedback.comment}</p>
                    <div className="flex items-center gap-4 mt-5">
                      <img
                        className="w-16 h-16 rounded-full"
                        src={feedback.src}
                        alt={feedback.alt}
                      />
                      <div>
                        <h2 className="text-lg text-[#64748b] font-bold">
                          {feedback.name}
                        </h2>
                        <h4 className="text-[#64748b]">{feedback.title}</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-feedback-pagination mb-3"></div>
          </motion.div>
        </section>
      </section>
    </>
  );
}
