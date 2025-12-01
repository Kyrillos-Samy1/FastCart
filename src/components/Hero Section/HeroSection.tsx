import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { scrollToTop } from "../ui/utils";
import { HeroSectionData } from "../../Data/HeroSection_Data";
import { motion, easeOut, easeInOut } from "framer-motion";

export default function HeroSection() {
  //! Variants for staggering the content
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
  };

  return (
    <>
      <section className="relative overflow-hidden xs:px-5 sm:px-16 bg-[linear-gradient(to_bottom_right,#0a1f17,#0a1f17,#0a1f17,#124030,#124030,#1e5c3c)]">
        <div className="flex justify-between items-center h-dvh">
          {/* Glowing gradient balls */}
          <motion.div
            className="pointer-events-none absolute blur-sm w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400/10 to-emerald-400/5 -bottom-10 right-0"
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.9, 1, 0.9],
              y: [0, -10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: easeInOut }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 -top-5 bottom-26 -left-28"
            animate={{
              scale: [0.9, 1, 0.9],
              opacity: [0.8, 1, 0.8],
              x: [0, 20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: easeInOut }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-60 h-60 rounded-full bg-gradient-to-tl from-emerald-400/10 to-emerald-400/5 bottom-0 left-10"
            animate={{
              scale: [0.9, 1, 0.9],
              opacity: [1, 0.8, 1],
              y: [0, 15, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: easeInOut }}
          />

          {/* Animated Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="md:mt-0 xs:mt-20 xs:pt-0 md:pt-20">
            <motion.h2
              variants={itemVariants}
              className="md:text-4xl xs:text-2xl text-pretty text-white/80 mb-10 xs:max-w-[480px] md:max-w-[750px]">
              {HeroSectionData[0].title_h2_first}{" "}
              <span className="text-emerald-400 font-semibold tracking-wide drop-shadow">
                {HeroSectionData[0].title_h2_center}
              </span>{" "}
              {HeroSectionData[0].title_h2_last}
            </motion.h2>

            <motion.h3
              variants={itemVariants}
              className="md:text-2xl xs:text-xl pb-10 text-white/80 md:max-w-[570px] xs:max-w-[470px] xs:w-full">
              {HeroSectionData[1].title_h3_first}{" "}
              <span className="text-emerald-400 lowercase">
                {HeroSectionData[1].title_h3_center}
              </span>{" "}
              {HeroSectionData[1].title_h3_last}
            </motion.h3>

            <motion.h1
              variants={itemVariants}
              className="md:text-[21px] xs:text-base text-white/80 md:max-w-[570px] sm:max-w-[470px] xs:w-full">
              <span className="text-emerald-400">
                {HeroSectionData[2].title_h1_first}
              </span>{" "}
              {HeroSectionData[2].title_h1_seconed}{" "}
              <span className="text-emerald-400">
                {HeroSectionData[2].title_h1_third}
              </span>{" "}
              {HeroSectionData[2].title_h1_forth}{" "}
              <span className="text-emerald-400">
                {HeroSectionData[2].title_h1_fifth}
              </span>{" "}
              {HeroSectionData[2].title_h1_last}
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-16 w-fit">
              <Link
                to={HeroSectionData[3].link_button || "/products"}
                onClick={() => scrollToTop()}>
                <Button
                  title={HeroSectionData[3].title_button || "Shop Now"}
                  titleHovering={
                    HeroSectionData[3].title_button_hovering || "Go To Shop"
                  }
                  type="button"
                  className="uppercase w-fit text-xl font-medium hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                  classNameIcon="-top-[1.5px]"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="max-w-[40%] xl:block xs:hidden 1xl:pt-44 xl:pt-20">
            <img
              src={
                HeroSectionData[4].srcImage ||
                "/Home Photos/Home/For another hero pages3.png"
              }
              alt={HeroSectionData[4].altImage || "Hero Image"}
              className="w-[100%] h-[100%] drop-shadow-3xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
