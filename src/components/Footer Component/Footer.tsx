import { Link, useLocation } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../ui/Button";
import { useState } from "react";
import { scrollToTop, toastSuccess } from "../ui/utils";
import { AppDispatch, RootState } from "../../Redux/reduxStore";
import { useDispatch, useSelector } from "react-redux";
import { setIsFooter, setIsNavbar } from "../../Redux/footerSlice";
import { motion, easeInOut, easeOut } from "framer-motion";

export default function Footer() {
  const location = useLocation();

  const [isItemName, setIsItemName] = useState<string | null>(null);

  function handleItemName(itemName: string) {
    setIsItemName(itemName);
  }

  const isFooter = useSelector(
    (state: RootState) => state.footerSlice.isFooter
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <footer className="relative overflow-hidden bottom-0 left-0 right-0 py-10 xl:px-40 md:px-10 xs:px-5 tracking-widest border-t-[3px] border-[var(--primary-color)] backdrop-blur-3xl shadow-md bg-[#0a1f17]">
      <motion.div
        animate={{
          scale: [0.8, 1, 0.8],
          opacity: [0.9, 1, 0.9],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: easeInOut
        }}
        className="pointer-events-none absolute blur-sm w-32 h-32 rounded-full bg-emerald-400/5 -bottom-10 left-0"
      />
      <motion.div
        animate={{
          scale: [0.9, 1, 0.9],
          opacity: [0.8, 1, 0.8],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: easeInOut
        }}
        className="pointer-events-none absolute blur-sm w-96 h-96 rounded-full bg-emerald-400/5 -top-5 bottom-26 -right-28"
      />
      <motion.div
        animate={{
          scale: [0.9, 1, 0.9],
          opacity: [1, 0.8, 1],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut
        }}
        className="pointer-events-none absolute blur-sm w-60 h-60 rounded-full bg-emerald-400/5 md:bottom-44 md:left-0 xs:right-0 xs:bottom-80"
      />

      {/* First Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="pb-16 border-b-[3px] rounded border-[var(--primary-color)] flex md:flex-row xs:flex-col gap-y-10 md:justify-between xs:items-start md:items-center xs:justify-between w-full">
        <div className="max-w-xs flex flex-col items-start justify-center gap-y-4">
          {/* Logo & Site Name. */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 15 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: [0, 5, -5, 0],
              y: 0
            }}
            transition={{
              duration: 1.2,
              y: { duration: 2, delay: 0.5 },
              ease: easeInOut
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            viewport={{ once: true }}>
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse hover:scale-105 transition-transform duration-500 ease-in-out"
              onClick={() => {
                scrollToTop();
                dispatch(setIsFooter());
              }}>
              <img
                src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748678155/cvwydgjkv2r3xluc58kd.png"
                className="h-10 w-10 rounded-full cursor-pointer"
                alt="FastCart Logo"
                title="FastCart Logo"
              />
              <span className="self-center xs:text-xl md:text-2xl font-semibold whitespace-nowrap text-[var(--primary-color)]">
                FastCart
              </span>
            </Link>
          </motion.div>

          <h2 className="md:text-xl xs:text-lg text-start text-white/80">
            Shop Smarter with{" "}
            <span className="text-[var(--primary-color)]">FastCart</span> —
            Anytime, Anywhere!
          </h2>

          {/* Social Media Icons */}
          <ul className="flex items-center gap-x-4">
            {[
              {
                link: "https://facebook.com/",
                title: "Facebook",
                target: "_blank",
                icon: <ImFacebook />
              },
              {
                link: "https://x.com/",
                title: "Twitter",
                target: "_blank",
                icon: <RiTwitterXFill />
              },
              {
                link: "https://instagram.com/",
                title: "Instagram",
                target: "_blank",
                icon: <FaInstagram />
              },
              {
                link: "tel:+20-1271470997",
                title: "Call us",
                icon: <FaWhatsapp />
              }
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  title={item.title}
                  target={item.target}
                  className="text-xl hover:shadow-xl shadow-md shadow-white/30 text-[var(--hovering-color)] hover:text-[var(--primary-color)] border-2 border-[var(--primary-color)] hover:border-[var(--primary-color)] bg-[var(--primary-color)] hover:bg-[var(--hovering-color)] hover:translate-y-[4px] h-10 w-10 rounded-full flex items-center justify-center transition-all duration-500"
                  onClick={() => dispatch(setIsFooter())}>
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Section */}
        <div className="max-w-sm flex flex-col items-start justify-between gap-y-4">
          <h2 className="md:text-2xl xs:text-xl text-start text-white/80">
            Subscribe to our newsletter
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              (e.target as HTMLFormElement).reset();
              toastSuccess("Thank you for subscribing!");
            }}
            className="flex flex-col gap-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-4 px-3 w-80 rounded-xl outline-none ring-2 ring-[var(--primary-color)]"
              required
            />
            <button
              type="submit"
              title="Subscribe"
              onClick={() => dispatch(setIsFooter())}>
              <Button
                title="Subscribe"
                type="submit"
                titleHovering="Send Email"
                className="hover:shadow-xl shadow-md shadow-white/30 uppercase tracking-widest"
              />
            </button>
          </form>
        </div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pb-16  border-b-[3px] rounded border-[var(--primary-color)] flex md:flex-row xs:flex-col gap-y-10 md:justify-between xs:items-start md:items-center xs:justify-between w-full">
        <div className="flex md:flex-row items-center justify-around xs:flex-col gap-y-4 xs:items-start w-full">
          <div className="flex flex-col items-start justify-center gap-y-4 pt-10 ">
            <h2 className="shadow-sm shadow-[var(--shadow-white-button)] text-white/80 md:text-2xl xs:text-xl mb-5 w-fit border-b-[3px] border-[var(--primary-color)] rounded-md p-1 pb-0">
              Explore More
            </h2>

            {/* Navigation Links. */}
            <div className="flex flex-col gap-y-4 w-fit">
              {[
                { itemName: "Privacy Policy", itemLink: "/privacy" },
                { itemName: "Terms of Service", itemLink: "/terms" },
                { itemName: "Contact Us", itemLink: "/contact" }
              ].map((item) => (
                <Link
                  to={item.itemLink}
                  key={item.itemName}
                  onClick={() => scrollToTop()}>
                  <p
                    className={`relative group text-white/80 text-lg w-fit`}
                    onClick={() => handleItemName(item.itemName)}>
                    {item.itemName}
                    <span
                      className={`${
                        isItemName === item.itemName &&
                        location.pathname === item.itemLink
                          ? "scale-x-100"
                          : "scale-x-0"
                      } pointer-events-none absolute bottom-0 left-0 w-full h-[2.5px] rounded-full bg-[var(--primary-color)] group-hover:scale-x-100 transition-transform duration-300`}
                    />
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact methods. */}
          <div className="flex flex-col items-start justify-center gap-y-4 pt-10 ">
            <h2 className="shadow-sm shadow-[var(--shadow-white-button)] text-white/80 md:text-2xl xs:text-xl mb-5 w-fit border-b-[3px] border-[var(--primary-color)] rounded-md p-1 pb-0">
              Get In Touch
            </h2>

            <div className="flex flex-col gap-y-4">
              {[
                { itemName: "+20-1271470997", itemLink: "tel:01271470997" },
                {
                  itemName: "kyrillossamy@outlook.com",
                  itemLink: "mailto:kyrillossamy@outlook.com"
                },
                {
                  itemName: "Ma'adi, Cairo, Egypt",
                  itemLink: "https://google.com/maps/place/Maadi+Cairo,+Egypt/",
                  target: "_blank"
                }
              ].map((item) => (
                <Link
                  to={item.itemLink}
                  key={item.itemName}
                  target={item.target}>
                  <p
                    className={`relative group text-white/80 text-lg w-fit`}
                    onClick={() => {
                      handleItemName(item.itemName);
                      dispatch(setIsNavbar());
                    }}>
                    {item.itemName}
                    <span
                      className={`${
                        isItemName === item.itemName && isFooter === true
                          ? "scale-x-100"
                          : "scale-x-0"
                      } pointer-events-none absolute bottom-0 left-0 w-full h-[2.5px] rounded-full bg-[var(--primary-color)] group-hover:scale-x-100 transition-transform duration-300`}
                    />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Third Section */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: easeOut, delay: 0.3 }}
        className="text-white text-center md:text-lg xs:text-sm pt-10">
        &copy; <span className="text-[var(--primary-color)]">FastCart</span> |
        Powered by{" "}
        <Link
          to="https://www.linkedin.com/in/kyrillos-samy-38b110222/"
          target="_blank"
          className="hover:text-white/80 border-b-[3px] border-[var(--primary-color)] rounded-md p-1"
          onClick={() => dispatch(setIsFooter())}>
          Kyrillos Samy
        </Link>
      </motion.p>
    </footer>
  );
}
