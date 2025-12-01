import { motion, AnimatePresence, easeInOut, easeOut } from "framer-motion";
import Button from "../ui/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Hamburger_Button_Menu from "./HamburgerButton & Menu";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { scrollToTop } from "../ui/utils";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/reduxStore";
import { setIsFooter } from "../../Redux/footerSlice";
import { useEffect, useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { setIsSearchOpen, setSearchQuery } from "../../Redux/searchSlice";
import SearchBar from "../Search Component/SearchBar";

export default function Navbar() {
  const location = useLocation();
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const searchDivRef = useRef<HTMLDivElement | null>(null);

  const searchIconRef = useRef<HTMLDivElement | null>(null);

  const productsCartLength = useSelector(
    (state: RootState) => state.productsCartSlice?.productsCartLengthState
  );
  const favorites = useSelector(
    (state: RootState) => state.wishlistSlice.favoriteProducts
  );

  const isNavbar = useSelector(
    (state: RootState) => state.footerSlice.isNavbar
  );

  const isSureToRemoveProduct = useSelector(
    (state: RootState) => state.cartSlice.isSureToRemoveProduct
  );

  const isSureToClearAllProducts = useSelector(
    (state: RootState) => state.cartSlice?.isSureToClearCart
  );

  const isSureToClearAllProductsFromWishlist = useSelector(
    (state: RootState) =>
      state.wishlistSlice?.isSureToClearAllProductsFromWishlist
  );

  const isSureToRemoveProductFromWishlist = useSelector(
    (state: RootState) => state.wishlistSlice?.isSureToRemoveProductFromWishlist
  );

  const isSearchOpen = useSelector(
    (state: RootState) => state.searchSlice.isSearchOpen
  );

  const dispatch = useDispatch<AppDispatch>();

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollDifference = Math.abs(currentScroll - lastScrollY.current);

      if (scrollDifference > 30) {
        if (currentScroll > lastScrollY.current) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        lastScrollY.current = currentScroll;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //! Framer Motion variants for navbar show/hide
  const navbarVariants = {
    hidden: {
      y: "-110%",
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.35,
        ease: easeInOut
      }
    },
    visible: {
      y: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: easeInOut
      }
    }
  };

  //! Variants for buttons container (fade in + slight upward slide)
  const buttonsContainerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        when: "beforeChildren"
      }
    }
  };

  //! Variants for each button/link (fade in + slide up)
  const buttonVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isSearchOpen &&
        searchInputRef.current &&
        searchDivRef.current &&
        searchIconRef.current &&
        !searchIconRef.current.contains(target) &&
        !searchInputRef.current.contains(target) &&
        !searchDivRef.current.contains(target)
      ) {
        dispatch(setIsSearchOpen(false));
        dispatch(setSearchQuery(""));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, isSearchOpen]);

  return (
    <>
      <AnimatePresence>
        {(showNavbar ||
          isSearchOpen ||
          isSureToRemoveProduct ||
          isSureToClearAllProducts ||
          isSureToClearAllProductsFromWishlist ||
          isSureToRemoveProductFromWishlist) && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navbarVariants}
            viewport={{ once: true }}
            className="fixed z-20 top-0 left-0 right-0 border-b-[3px] border-green-700 backdrop-blur-3xl shadow-md bg-[linear-gradient(to_right,#0a1f17,#0a1f17,#0a1f17,#0a1f17,#0a1f17,#0a1f17,#0a1f17,#0f2a24,#124030,#124030,#124030)]">
            <div className="max-w-[1475px] flex items-center justify-between mx-auto p-4">
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
                    dispatch(setIsSearchOpen(false));
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

              {/* Search Bar */}
              <SearchBar props={{ searchInputRef, searchDivRef }} />

              {/* Navigation Links */}
              {token && (
                <div className="items-center justify-between xs:hidden w-full xl:flex md:w-auto md:order-1">
                  <ul className="flex flex-col tracking-widest p-4 bg-transparent md:space-x-8 xl:flex-row rounded-full border-2 border-[var(--primary-color)]">
                    {[
                      { itemName: "Home", itemLink: "/" },
                      { itemName: "Products", itemLink: "/products" },
                      { itemName: "Categories", itemLink: "/categories" },
                      { itemName: "About", itemLink: "/about" },
                      { itemName: "Contact", itemLink: "/contact" }
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.15 + index * 0.1,
                          duration: 0.8
                        }}
                        viewport={{ once: true }}>
                        <Link
                          to={item.itemLink}
                          onClick={() => {
                            scrollToTop();
                            dispatch(setIsFooter());
                            dispatch(setIsSearchOpen(false));
                          }}
                          className={`lg:block xs:hidden bg-transparent relative group tracking-[0.09em] uppercase text-md ${
                            location.pathname === item.itemLink &&
                            isNavbar === true
                              ? "text-[var(--primary-color)]"
                              : "text-white"
                          }`}>
                          {item.itemName}
                          <span
                            className={`${
                              location.pathname === item.itemLink &&
                              isNavbar === true
                                ? "scale-x-100"
                                : "scale-x-0"
                            } pointer-events-none absolute bottom-0 left-0 w-full h-[2.5px] rounded-full bg-[var(--primary-color)] group-hover:scale-x-100 transition-transform duration-300`}
                          />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Hamburger Menu Button & Action Buttons */}
              <div className="flex xl:order-2 xs:space-x-6 lg:space-x-0 rtl:space-x-reverse">
                {/* Hamburger Menu Button */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={buttonVariants}
                  viewport={{ once: true }}>
                  <Hamburger_Button_Menu />
                </motion.div>

                {/* Action Buttons */}
                {token ? (
                  <motion.div
                    className="xs:hidden xl:flex space-x-4 rtl:space-x-reverse"
                    initial="hidden"
                    animate="visible"
                    variants={buttonsContainerVariants}
                    viewport={{ once: true }}>
                    <motion.div
                      ref={searchIconRef}
                      variants={buttonVariants}
                      viewport={{ once: true }}>
                      <div
                        onClick={() => {
                          scrollToTop();
                          dispatch(setIsFooter());
                          dispatch(setIsSearchOpen(!isSearchOpen));
                          dispatch(setSearchQuery(""));
                        }}>
                        <Button
                          titleHovering="Search Now"
                          type="button"
                          searchIcon={<BiSearchAlt2 fontSize="1.7em" />}
                          className="py-[8px] hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      variants={buttonVariants}
                      viewport={{ once: true }}>
                      <Link
                        to="/cart"
                        onClick={() => {
                          scrollToTop();
                          dispatch(setIsFooter());
                          dispatch(setIsSearchOpen(false));
                        }}>
                        <Button
                          titleHovering="Go To Cart"
                          type="button"
                          iconCart={
                            productsCartLength > 0 ? (
                              <ShoppingCartRoundedIcon />
                            ) : (
                              <AddShoppingCartRoundedIcon />
                            )
                          }
                          className="pl-0 py-[8px] hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                        />
                      </Link>
                    </motion.div>

                    <motion.div
                      variants={buttonVariants}
                      viewport={{ once: true }}>
                      <Link
                        to="/wishlist"
                        onClick={() => {
                          scrollToTop();
                          dispatch(setIsFooter());
                          dispatch(setIsSearchOpen(false));
                        }}>
                        <Button
                          titleHovering="My Wishlist"
                          type="button"
                          iconFavorite={
                            favorites.length === 0 ? (
                              <FavoriteBorderOutlinedIcon />
                            ) : (
                              <FavoriteRoundedIcon />
                            )
                          }
                          iconFavoriteCounter={true}
                          className="hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                        />
                      </Link>
                    </motion.div>

                    <motion.div
                      variants={buttonVariants}
                      viewport={{ once: true }}>
                      <Link
                        to="/login"
                        onClick={() => {
                          sessionStorage.removeItem("token");
                          navigate("/login");
                          scrollToTop();
                          dispatch(setIsFooter());
                          dispatch(setIsSearchOpen(false));
                        }}>
                        <Button
                          title="Log Out"
                          titleHovering="Log Out"
                          type="button"
                          className="hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                        />
                      </Link>
                    </motion.div>
                  </motion.div>
                ) : (
                  //! If user is not logged in, show Log In and Sign Up buttons
                  <motion.div
                    className="xl:flex space-x-4 rtl:space-x-reverse xs:hidden"
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true }}
                    variants={buttonsContainerVariants}>
                    <motion.div
                      variants={buttonVariants}
                      viewport={{ once: true }}>
                      <Link
                        to="/login"
                        onClick={() => {
                          scrollToTop();
                          dispatch(setIsFooter());
                        }}>
                        <Button
                          title="Log In"
                          titleHovering="Log In"
                          type="button"
                          className="hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                        />
                      </Link>
                    </motion.div>

                    <motion.div
                      variants={buttonVariants}
                      viewport={{ once: true }}>
                      <Link
                        to="/signup"
                        onClick={() => {
                          scrollToTop();
                          dispatch(setIsFooter());
                        }}>
                        <Button
                          title="Sign Up"
                          titleHovering="Sign Up"
                          type="button"
                          className="hover:shadow-xl shadow-md shadow-[var(--shadow-white-button)]"
                        />
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
