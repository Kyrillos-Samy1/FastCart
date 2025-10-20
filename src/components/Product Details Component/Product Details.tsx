import { Swiper } from "swiper/react";
import type { Swiper as SwiperRef } from "swiper";
import HeroSection from "../Hero Section/HeroSection";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import CheckCircleOutlineSharpIcon from "@mui/icons-material/CheckCircleOutlineSharp";
import DangerousRoundedIcon from "@mui/icons-material/DangerousRounded";
import StraightenRoundedIcon from "@mui/icons-material/StraightenRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { topProduct } from "../../Data/Home_Data";
import { allProducts } from "../../Data/AllProducts_Data";
import {
  productDetails,
  titleProductDetails,
  sizeTableForShoes,
  sizeTableForTop_Bottom
} from "../../Data/ProductDetails_Data";
import Button from "../ui/Button";
import { Link, useLocation, useParams } from "react-router-dom";
import NotFound from "../NotFound Component/NotFound";
import {
  scrollToTop,
  toastError,
  toastSuccess
  // toastWarning
} from "../ui/utils";
import Product from "../Product Component/Product";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/reduxStore";
import {
  addProductToCart,
  productsCartLength
} from "../../Redux/productDetailsSlice";
import {
  addProductToFavorite,
  removeProductFromFavorite
} from "../../Redux/wishlistSlice";
import { motion } from "framer-motion";

export default function Product_Details() {
  const [isDescShowen, setIsDescShowen] = useState<boolean>(false);

  const [isVideoPlay, setIsVideoPlay] = useState<boolean>(false);

  const [isColorSelected, setIsColorSelected] = useState<number>(0);

  const [colorSelected, setColorSelected] = useState<boolean>(false);

  const [colorName, setColorName] = useState<string | null>(null);

  const [indexImageNumber, setIndexImageNumber] = useState<number>(0);

  const [isSizeSelected, setIsSizeSelected] = useState<number | null>(null);

  const [selectedSize, setSelectedSize] = useState<number | string | null>(
    null
  );

  const [isSizeGuide, setIsSizeGuide] = useState<boolean>(false);

  const [isMeasureButton, setIsMeasureButton] = useState<boolean>(true);

  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);

  const [selectQuantity, setSelectQuantity] = useState<number>(0);

  const [quantityPerImage, setQuantityPerImage] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [indexSize, setIndexSize] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const swiperRef = useRef<SwiperRef | null>(null);
  const sizeGuideRef = useRef<HTMLDivElement | null>(null);

  const topProdutName = topProduct.map((product) => product.name);
  const allProdutName = allProducts.map((product) => product.name);

  const favorites = useSelector(
    (state: RootState) => state.wishlistSlice.favoriteProducts
  );

  const { id } = useParams<{ id: string }>();

  const productFiltration = productDetails?.filter(
    (product) =>
      product.id === Number(id) &&
      (product.name === allProdutName[Number(id) - 1]! ||
        product.name === topProdutName[Number(id) - 1]!)
  );

  const isProductFiltration = productDetails?.some(
    (product) =>
      product.id === Number(id) &&
      (product.name === allProdutName[Number(id) - 1]! ||
        product.name === topProdutName[Number(id) - 1]!)
  );

  const productDetailsCategory = productDetails[Number(id) - 1]?.category;

  const relatedProductsFiltration = allProducts?.filter((relatedProduct) =>
    productDetailsCategory?.includes(relatedProduct?.category)
  );

  const visibleCards = relatedProductsFiltration.slice(0, 9);

  const relatedNameFiltration = relatedProductsFiltration.filter(
    (relatedName) => productDetails[Number(id) - 1].name === relatedName.name
  );

  const nameFiltration = relatedProductsFiltration.find((relatedProduct) =>
    relatedNameFiltration.find(
      (nameFilter) => nameFilter.name === relatedProduct.name
    )
  );

  const product = productDetails[Number(id) - 1];
  const pre_Discount = Number(product?.Pre_Discount?.replace(/[^0-9.]/g, ""));
  const after_Discount = Number(
    product?.After_Discount?.replace(/[^0-9.]/g, "")
  );
  const discountPercentage =
    ((pre_Discount - after_Discount) / pre_Discount) * 100;

  const dispatch = useDispatch<AppDispatch>();

  function handlePlayVideo() {
    const video = videoRef.current;
    if (video) {
      if (isVideoPlay) {
        video.pause();
      } else {
        video.play();
      }
    }
  }

  function handleOutOfStock(imgQuantity: string, imgColor: string) {
    if (imgQuantity === "Out Of Stock") {
      toastError(`${imgColor} Color is Out Of Stock!`);
    }
  }

  function handleAddToCartButton() {
    if (isColorSelected === null || colorSelected === false) {
      toastError("Please! Select Your Favorite Color!");
      setIsAddedToCart(false);
    } else if (isSizeSelected === null) {
      toastError("Please! Select Your Size!");
      setIsAddedToCart(false);
    } else if (selectQuantity === 0) {
      toastError("Please! Select Quantity!");
      setIsAddedToCart(false);
    } else {
      setIsAddedToCart(true);
      setIsLoading(true);

      const timeout = setTimeout(() => {
        setIsColorSelected(0);
        setColorSelected(false);
        setIsSizeSelected(null);
        setSelectQuantity(0);
        setIsAddedToCart(false);
        setIsLoading(false);

        toastSuccess("Product Added To Cart!");

        dispatch(
          addProductToCart({
            id: Number(id),
            idImg: productDetails[Number(id) - 1].images[indexImageNumber].id,
            sizeID: isSizeSelected,
            indexImageNumber: indexImageNumber,
            indexSize: indexSize,
            photo: productDetails[Number(id) - 1].images[indexImageNumber].img,
            name: productDetails[Number(id) - 1].name,
            categoryName: productDetails[Number(id) - 1].category,
            subCategory: productDetails[Number(id) - 1].subCategory,
            color: colorName!,
            colorHexa:
              productDetails[Number(id) - 1].images[indexImageNumber].colorHexa,
            size: String(selectedSize),
            quantity: selectQuantity,
            price: productDetails[Number(id) - 1].After_Discount,
            width:
              productDetails[Number(id) - 1].images[indexImageNumber].size[
                indexSize
              ].width,
            height:
              productDetails[Number(id) - 1].images[indexImageNumber].size[
                indexSize
              ].height
          })
        );

        // dispatch(
        //   updateQuantity({
        //     productId: productDetails[Number(id) - 1].id,
        //     imageId: productDetails[Number(id) - 1].images[indexImageNumber].id,
        //     quantity: selectQuantity
        //   })
        // );

        dispatch(productsCartLength());
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }

  function handleIncreaseQuantity() {
    if (colorSelected === false) {
      toastError("Select Color First!");
    } else if (isSizeSelected === null) {
      toastError("Select Size First!");
    } else {
      if (selectQuantity >= 15) {
        toastError("Max allowed: 15 items per order.");
        return;
      }

      setSelectQuantity((prev) => prev + 1);
    }
  }

  function handleDecreaseQuantity() {
    if (selectQuantity > 0) {
      setSelectQuantity((prev) => prev - 1);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (sizeGuideRef.current && !sizeGuideRef.current.contains(target)) {
        setIsSizeGuide(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsColorSelected(0);
    setColorSelected(false);
    setIsSizeSelected(null);
    setSelectQuantity(0);
    setQuantityPerImage("");
    setColorName("");
    setIndexImageNumber(0);
  }, [id]);

  //! Get the current location object from React Router
  const location = useLocation();

  //! Run this effect every time the location changes
  useEffect(() => {
    const hash = location.hash; //* Extract the hash part (e.g., "#productDetails")
    if (hash) {
      //* Remove the '#' and get the corresponding element by ID
      const element = document.getElementById(hash.substring(1));
      if (element) {
        //* Scroll smoothly to the element
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <section>
        <div>
          <HeroSection />
        </div>

        {isProductFiltration! ? (
          <>
            {/* Product Details Section */}
            <section
              className={` relative overflow-hidden `}
              id="productDetails">
              {/* Title Of Product Details Page! */}
              <motion.div
                className="inline-block xs:mt-8 lg:mt-10 sm:px-10 xs:px-5"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                exit={{ opacity: 0, x: -50 }}>
                <h2 className="lg:text-4xl text-start md:text-3xl xs:text-[22px] font-bold text-[#124030]">
                  {titleProductDetails.title}
                </h2>
                <div className="h-[3px] w-[90%] mx-auto bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
              </motion.div>

              <section className="flex xs:flex-col xl:flex-row justify-between xs:pt-8 lg:pt-10 tracking-wider sm:px-10 xs:px-5 pb-12">
                {/* Images & Video Slider Container */}
                <motion.div
                  className="relative h-fit rounded-3xl xl:w-[40%] xs:w-full md:px-16 xl:px-0 xs:mb-10 xl:mb-0 "
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  exit={{ opacity: 0, x: -50 }}>
                  {/* Previous Button. */}
                  <motion.div
                    className="absolute md:top-[45%] xs:top-[45%] xl:-left-3 md:left-1 xs:-left-3 z-10"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      videoRef.current?.pause();
                      setIsVideoPlay(false);
                    }}>
                    <Button
                      type="button"
                      titleHovering="Prev"
                      className="swiper-productDetails-prev bg-gray-100 rounded-full w-10 h-10 py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0"
                      classNameArrows="ml-0 bg-[var(--primary-color)] rotate-180"
                      classNameArrowRight="text-white"
                    />
                  </motion.div>

                  {/* Mapping For Images & Videos. */}
                  {productFiltration.map(() => (
                    <Swiper
                      ref={(node) => {
                        swiperRef.current = node?.swiper || null;
                      }}
                      onSwiper={(imageIndex) => {
                        swiperRef.current = imageIndex;
                      }}
                      // onSlideChange={(swiper) => {
                      //   const currentIndex = swiper.activeIndex;
                      //   setIndexImage(currentIndex);
                      //   if (product && currentIndex < product.images.length) {
                      //     setLastValidImageIndex(currentIndex);
                      //   }
                      // }}
                      modules={[Navigation, Pagination]}
                      slidesPerView={1}
                      spaceBetween={0}
                      pagination={{
                        clickable: true
                      }}
                      navigation={{
                        prevEl: ".swiper-productDetails-prev",
                        nextEl: ".swiper-productDetails-next"
                      }}
                      allowSlideNext={true}
                      allowSlidePrev={true}
                      className="mySwiper flex items-center xl:h-[600px] sm:h-[500px] xs:h-[400px] bg-gray-100 rounded-3xl">
                      <div>
                        {productFiltration.map((product, indexProduct) => (
                          <>
                            <div
                              key={indexProduct}
                              className="flex items-center rounded-3xl relative">
                              {/* Mapping For Images Part */}
                              {product.images.map(
                                (image, indexImageContainer) => (
                                  <>
                                    <SwiperSlide
                                      key={indexImageContainer}
                                      className="flex items-center">
                                      <div className="flex justify-center items-center h-full">
                                        <img
                                          src={image.img}
                                          alt={`Product Image With ${image.color} Color`}
                                          className="rounded-3xl md:max-h-[400px] xs:max-h-[300px] xl:w-[90%] md:w-[100%] xs:w-[87%] object-contain"
                                        />

                                        <div
                                          className={`absolute top-2 right-2 md:mx-16 lg:mx-0 xs:mx-0 z-10 bg-gray-10 text-xl w-fit py-1 px-2 border-2 rounded-lg pointer-events-none
                                          ${
                                            image.quantity === "Out Of Stock"
                                              ? "text-red-500 border-red-500"
                                              : "text-[var(--primary-color)] border-[var(--primary-color)]"
                                          }`}>
                                          {image.quantity === "Out Of Stock"
                                            ? "Out Of Stock"
                                            : "In Stock"}
                                        </div>
                                      </div>
                                    </SwiperSlide>
                                  </>
                                )
                              )}
                            </div>

                            {/* Mapping For Videos Part! */}
                            {product.video && (
                              <SwiperSlide key={product.id}>
                                <div className="relative flex justify-center items-center rounded-3xl h-full cursor-pointer">
                                  <video
                                    ref={videoRef}
                                    src={product.video}
                                    className="rounded-3xl w-fit object-contain xl:mb-16 lg:mb-32 xs:mb-16 "
                                    loop
                                    muted
                                    playsInline
                                    preload="auto"
                                    title={
                                      isVideoPlay ? "Pause Video" : "Play Video"
                                    }
                                    onClick={() => {
                                      handlePlayVideo();
                                      setIsVideoPlay(!isVideoPlay);
                                    }}
                                  />

                                  <button
                                    type="button"
                                    className={`${
                                      isVideoPlay ? "opacity-0" : "opacity-100"
                                    } absolute top-[50%] -translate-y-[50%] backdrop-blur-sm bg-white/50 rounded-full h-14 w-14 flex justify-center items-center border-[2px] border-[var(--primary-color)] transition-opacity duration-500 ease-in-out`}
                                    onClick={() => {
                                      handlePlayVideo();
                                      setIsVideoPlay(!isVideoPlay);
                                    }}>
                                    {isVideoPlay ? (
                                      <PauseRoundedIcon
                                        className="text-[var(--primary-color)]"
                                        fontSize="large"
                                        titleAccess="Pause Video"
                                      />
                                    ) : (
                                      <PlayArrowRoundedIcon
                                        className="text-[var(--primary-color)]"
                                        fontSize="large"
                                        titleAccess="Play Video"
                                      />
                                    )}
                                  </button>
                                </div>
                              </SwiperSlide>
                            )}
                          </>
                        ))}
                      </div>
                    </Swiper>
                  ))}

                  {/* Next Button. */}
                  <motion.div
                    className="absolute xl:-right-3 md:right-1 xs:-right-3 top-[45%] z-10"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      videoRef.current?.pause();
                      setIsVideoPlay(false);
                    }}>
                    <Button
                      type="button"
                      titleHovering="Next"
                      className="swiper-productDetails-next bg-gray-100 rounded-full py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0"
                      classNameArrows="ml-0 bg-[var(--primary-color)]"
                      classNameArrowRight="text-white"
                    />
                  </motion.div>
                </motion.div>

                {/* All Details Of The Product Container! */}
                {productFiltration.map((product, indexProduct) => (
                  <>
                    <div key={indexProduct} className="xl:w-[50%] xs:w-full">
                      {/* Product Content Part! */}
                      <div className="flex flex-col justify-between w-[100%] ">
                        {/* Product Name Part! */}
                        <motion.h2
                          className="text-4xl font-bold text-gray-800"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.5
                          }}>
                          {product.name}
                        </motion.h2>

                        {/* Product Category Part! */}
                        <motion.h5
                          className="mt-2 text-lg text-gray-700"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.6
                          }}>
                          {product?.category}{" "}
                          {(product.category === "Kids Clothing" ||
                            product.category === "Kids Shoes") &&
                            (product.subCategory === "Kids Boys"
                              ? "– Boys"
                              : product.subCategory === "Kids Girls"
                              ? "– Girls"
                              : product.subCategory === "Kids Both" &&
                                "– Both")}
                        </motion.h5>

                        {/* Product Price Part! */}
                        <motion.div
                          className="flex gap-2 mt-2 text-gray-800 items-center font-[seguo-ui]"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.7
                          }}>
                          <p className="text-4xl font-bold">
                            {product.After_Discount}
                          </p>
                          <div className="flex gap-2">
                            <sub className="line-through text-xl">
                              {product.Pre_Discount}
                            </sub>

                            {product.Pre_Discount && product.After_Discount && (
                              <p className="text-xl  text-red-700 bg-red-300/20 py-[2px] px-1 rounded-md">
                                {discountPercentage?.toFixed(0) + "%"}
                                <span className="pl-[6px]  ">OFF</span>
                              </p>
                            )}
                          </div>
                        </motion.div>

                        {/* Description Part! */}
                        <motion.div
                          className="mt-2 relative md:w-[85%] xs:w-[100%] pb-2 overflow-hidden"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.8
                          }}>
                          <h2 className="text-lg text-gray-800 font-bold">
                            Description:
                          </h2>
                          <div
                            className={`mt-1 ${
                              isDescShowen ? "h-32  overflow-auto" : "h-20"
                            }`}>
                            <p className="text-gray-700 mb-7">{product.Desc}</p>
                          </div>

                          {/* Linear Gradiant gray For See More Button! */}
                          <div
                            className={`${
                              isDescShowen ? "bottom-0 pt-5" : "bottom-0"
                            } absolute w-full bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent `}>
                            <div
                              className={`flex justify-center w-full h-fit ${
                                isDescShowen ? "mt-0" : "mt-10"
                              }`}>
                              <button
                                type="button"
                                onClick={() => setIsDescShowen(!isDescShowen)}
                                className="w-fit font-bold underline underline-offset-2 text-gray-700 h-fit">
                                {isDescShowen ? (
                                  <>
                                    Show Less <KeyboardArrowUpRoundedIcon />
                                  </>
                                ) : (
                                  <>
                                    Show More <KeyboardArrowDownRoundedIcon />
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Border Line Part! */}
                      <motion.div
                        className="border-[1.5px] mt-4 border-gray-300 mb-4"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.9
                        }}
                      />

                      {/* Select Color Part! */}
                      <motion.div
                        className="flex flex-col"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 1
                        }}>
                        <h2 className="text-lg font-bold text-gray-700">
                          Select Color:
                        </h2>

                        <div
                          className={` ${
                            isLoading
                              ? "pointer-events-none"
                              : "pointer-events-auto"
                          } flex flex-wrap items-center mt-2 gap-3 max-h-[105px]`}>
                          {product.images.map((img, indexImage) => (
                            <button
                              key={indexImage}
                              type="button"
                              onClick={() => {
                                handleOutOfStock(img.quantity, img.color);
                                setIndexImageNumber(indexImage);
                                setColorName(img.color);
                                setQuantityPerImage(img.quantity);
                                setColorSelected(false);
                                setIsSizeSelected(null);
                                setSelectQuantity(0);

                                if (swiperRef.current) {
                                  swiperRef.current.slideTo(indexImage);
                                }

                                if (img.quantity === "Out Of Stock") {
                                  setIsColorSelected(0);
                                  setColorSelected(false);
                                  setIsSizeSelected(null);
                                  setSelectQuantity(0);
                                  return;
                                }

                                {
                                  if (indexImage === indexImage) {
                                    setIsColorSelected(indexImage);
                                    setColorSelected(true);
                                    toastSuccess(
                                      `${img.color} Color is Selected!`
                                    );
                                    setIsSizeSelected(null);
                                    setSelectQuantity(0);
                                  }
                                }
                              }}
                              className={` ${
                                img.quantity === "Out Of Stock"
                                  ? "cursor-not-allowed border-red-500"
                                  : "border-[var(--primary-color)] cursor-pointer border-green-700 hover:scale-105"
                              } md:w-[90px] xs:w-14 relative rounded-lg border-2 transition-all duration-300 ease-in-out max-h-[105px] overflow-hidden`}>
                              <img
                                src={img.img}
                                alt={img.alt}
                                title={img.color}
                                className="w-[100px] outline-none max-h-[80px] overflow-hidden mx-auto object-contain"
                              />
                              <div
                                title={
                                  img.quantity === "Out Of Stock"
                                    ? `${img.color} Color is Out Of Stock!`
                                    : `${img.color} Selected`
                                }
                                className={`${
                                  (isColorSelected === indexImage &&
                                    colorSelected) ||
                                  img.quantity === "Out Of Stock"
                                    ? "block"
                                    : "hidden"
                                } 
                                bg-white/60 absolute top-0 bottom-0 left-0 right-0 rounded-lg flex items-center justify-center`}>
                                {img.quantity === "Out Of Stock" ? (
                                  <DangerousRoundedIcon
                                    className="text-red-500 rounded-full backdrop-blur-3xl bg-white border-[1px] border-red-500"
                                    fontSize="medium"
                                  />
                                ) : (
                                  <CheckCircleOutlineSharpIcon
                                    className="text-[var(--primary-color)] rounded-full backdrop-blur-3xl bg-white border-[1px] border-[var(--primary-color)]"
                                    fontSize="medium"
                                  />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>

                      {/* Select Size Part! */}
                      <motion.div
                        className={`${
                          isLoading
                            ? "pointer-events-none"
                            : "pointer-events-auto"
                        } mt-4`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 1.1
                        }}>
                        <h6 className="text-lg font-bold text-gray-700 mb-1">
                          {product?.category === "Electronics" &&
                          (product?.subCategory === "Flash Disk" ||
                            product?.subCategory === "Mobile")
                            ? "Select Storage:"
                            : product?.category === "Home Appliances" &&
                              (product?.subCategory === "Washing Machine" ||
                                product?.subCategory === "Espresso Maker")
                            ? "Select Capacity:"
                            : "Select Size:"}{" "}
                          <span className="text-sm font-medium">
                            {((product?.category === "Home Appliances" &&
                              (product?.subCategory === "Fridge" ||
                                product?.subCategory === "Gas Stove" ||
                                product.subCategory === "Microwave" ||
                                product?.subCategory === "Toaster")) ||
                              product?.category === "Women's Bags") &&
                              "Width * Height — (in CM)"}

                            {product?.category === "Home Appliances" &&
                              product?.subCategory === "Washing Machine" &&
                              "(in Kg)"}

                            {product?.category === "Home Appliances" &&
                              product?.subCategory === "Espresso Maker" &&
                              "(in Liters)"}

                            {product?.category === "Electronics" &&
                              (product?.subCategory === "Mouse" ||
                                product?.subCategory === "Keyboard") &&
                              "Width * Length — (in CM)"}

                            {product?.category === "Electronics" &&
                              (product?.subCategory === "Flash Disk" ||
                                product?.subCategory === "Mobile") &&
                              "(in GB)"}

                            {product?.category === "Electronics" &&
                              (product.subCategory === "LapTop" ||
                                product?.subCategory === "Computer Monitor" ||
                                product?.subCategory === "Apple Watch") &&
                              "(in Inches)"}
                          </span>
                        </h6>

                        <div className="flex flex-wrap items-center w-fit rounded-md gap-[6px]">
                          {product.images[indexImageNumber]?.size.map(
                            (size, indexSize) => (
                              <button
                                key={indexSize}
                                type="button"
                                title={
                                  size.available === false ||
                                  quantityPerImage === "Out Of Stock"
                                    ? `${
                                        (product?.category ===
                                          "Home Appliances" &&
                                          (product?.subCategory === "Fridge" ||
                                            product?.subCategory ===
                                              "Gas Stove" ||
                                            product?.subCategory ===
                                              "Microwave" ||
                                            product?.subCategory ===
                                              "Toaster")) ||
                                        product?.category === "Women's Bags" ||
                                        (product?.category === "Electronics" &&
                                          (product?.subCategory === "Mouse" ||
                                            product?.subCategory ===
                                              "Keyboard"))
                                          ? `${size.width} * ${size.height}`
                                          : size.size
                                      } is not available`
                                    : `${
                                        (product?.category ===
                                          "Home Appliances" &&
                                          (product?.subCategory === "Fridge" ||
                                            product?.subCategory ===
                                              "Gas Stove" ||
                                            product?.subCategory ===
                                              "Microwave" ||
                                            product?.subCategory ===
                                              "Toaster")) ||
                                        product?.category === "Women's Bags" ||
                                        (product?.category === "Electronics" &&
                                          (product?.subCategory === "Mouse" ||
                                            product?.subCategory ===
                                              "Keyboard"))
                                          ? `${size.width} * ${size.height}`
                                          : size.size
                                      } is available`
                                }
                                onClick={() => {
                                  if (!size.available) {
                                    toastError(
                                      `${
                                        (product?.category ===
                                          "Home Appliances" &&
                                          (product?.subCategory === "Fridge" ||
                                            product?.subCategory ===
                                              "Gas Stove" ||
                                            product?.subCategory ===
                                              "Microwave" ||
                                            product?.subCategory ===
                                              "Toaster")) ||
                                        product?.category === "Women's Bags" ||
                                        (product?.category === "Electronics" &&
                                          (product?.subCategory === "Mouse" ||
                                            product?.subCategory ===
                                              "Keyboard"))
                                          ? `${size.width} * ${size.height}`
                                          : size.size
                                      } ${
                                        product?.category ===
                                          "Home Appliances" &&
                                        product?.subCategory ===
                                          "Espresso Maker"
                                          ? "Liters"
                                          : "Size"
                                      } is not available!`
                                    );
                                    return;
                                  }

                                  if (!colorSelected) {
                                    toastError("Select Color First!");
                                    return;
                                  }

                                  setIsSizeSelected(size.id);
                                  setSelectedSize(String(size.size));
                                  setIndexSize(indexSize);

                                  toastSuccess(
                                    `${
                                      (product?.category ===
                                        "Home Appliances" &&
                                        (product?.subCategory === "Fridge" ||
                                          product?.subCategory ===
                                            "Gas Stove" ||
                                          product?.subCategory ===
                                            "Microwave" ||
                                          product?.subCategory ===
                                            "Toaster")) ||
                                      product?.category === "Women's Bags" ||
                                      (product?.category === "Electronics" &&
                                        (product?.subCategory === "Mouse" ||
                                          product?.subCategory === "Keyboard"))
                                        ? `${size.width} * ${size.height}`
                                        : size.size
                                    } ${
                                      product?.category === "Home Appliances" &&
                                      product?.subCategory === "Espresso Maker"
                                        ? "Liters"
                                        : "Size"
                                    } is Selected!`
                                  );
                                }}
                                className={`${
                                  (product?.category === "Home Appliances" &&
                                    (product?.subCategory === "Fridge" ||
                                      product?.subCategory === "Gas Stove" ||
                                      product?.subCategory === "Microwave" ||
                                      product?.subCategory ===
                                        "Espresso Maker" ||
                                      product?.subCategory === "Toaster")) ||
                                  productDetailsCategory === "Women's Tops" ||
                                  productDetailsCategory === "Women's Bags" ||
                                  productDetailsCategory === "Electronics" ||
                                  product?.category === "Women's Pants" ||
                                  product?.category === "Men's Pants" ||
                                  product?.category === "Men's T-shirts" ||
                                  product?.category === "Kids Clothing" ||
                                  (product?.category === "Electronics" &&
                                    (product?.subCategory === "Mouse" ||
                                      product?.subCategory === "Keyboard"))
                                    ? "w-fit h-fit px-2"
                                    : "w-8 h-8"
                                } font-bold overflow-hidden rounded-md border-2 transition-all duration-300 ease-in-out
                                ${
                                  !size.available ||
                                  quantityPerImage === "Out Of Stock"
                                    ? "cursor-not-allowed bg-gray-200/60 text-gray-500 border-2 border-red-500"
                                    : "text-gray-700 hover:border-[var(--primary-color)] hover:scale-105"
                                }
                                ${
                                  isSizeSelected === size.id &&
                                  size.available &&
                                  quantityPerImage === "In Stock"
                                    ? "bg-gray-400/25 border-2 border-[var(--primary-color)] scale-100"
                                    : "bg-gray-200/60"
                                }
                                
                               `}>
                                {(product?.category === "Home Appliances" &&
                                  (product?.subCategory === "Fridge" ||
                                    product?.subCategory === "Gas Stove" ||
                                    product?.subCategory === "Microwave" ||
                                    product?.subCategory === "Toaster")) ||
                                product?.category === "Women's Bags" ||
                                (product?.category === "Electronics" &&
                                  (product?.subCategory === "Mouse" ||
                                    product?.subCategory === "Keyboard"))
                                  ? `${size.width} * ${size.height}`
                                  : size.size}
                              </button>
                            )
                          )}
                        </div>

                        {/* Size Guide Table Part For (Men's & Women's & Kids Shoes). */}
                        {(product?.category === "Men's Shoes" ||
                          product?.category === "Women's Shoes" ||
                          product?.category === "Kids Shoes") && (
                          <>
                            <motion.button
                              className="mt-4 text-gray-700 border-b-2 border-gray-500 hover:border-gray-300 rounded-md px-[2px]"
                              onClick={() => setIsSizeGuide(!isSizeGuide)}
                              type="button"
                              title="Size guide"
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 1.2
                              }}>
                              <h2>
                                <StraightenRoundedIcon
                                  className="text-gray-700"
                                  fontSize="small"
                                />{" "}
                                Size guide
                              </h2>
                            </motion.button>

                            {isSizeGuide && (
                              <>
                                <div className="tracking-wider absolute z-10 inset-0 bg-black/50 flex items-center justify-center">
                                  <div
                                    className="lg:w-[50%] lg:h-[80%] w-[90%] h-[60%] bg-gray-300 backdrop-blur-3xl px-5 pt-5 rounded-md shadow-2xl "
                                    ref={sizeGuideRef}>
                                    <div className="flex justify-between items-center border-b-2 border-gray-800 pb-2">
                                      <h3 className="font-semibold text-2xl text-gray-900">
                                        Size Guide Table
                                      </h3>

                                      <DangerousRoundedIcon
                                        className="cursor-pointer text-gray-700 w-fit h-fit rounded-full"
                                        fontSize="large"
                                        onClick={() => setIsSizeGuide(false)}
                                      />
                                    </div>

                                    <div className="overflow-auto xl:h-[90%] xs:h-[90%] mt-4 pr-2">
                                      <div className="overflow-auto h-[60%] pr-2">
                                        <div className="xs:p-0 xs:mt-4 md:mt-0 space-y-12 max-w-4xl mx-auto">
                                          {sizeTableForShoes.map(
                                            (section, indexSizeTable) => (
                                              <div key={indexSizeTable}>
                                                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                                  {section.title}
                                                </h2>
                                                <table className="min-w-full border border-gray-50 rounded-xl overflow-hidden">
                                                  <thead className="bg-gray-100">
                                                    <tr>
                                                      <th className="py-2 px-4 border-b border-gray-50 text-left bg-gray-200 md:text-base xs:text-sm">
                                                        Foot Length (cm)
                                                      </th>
                                                      <th className="py-2 px-4 border-b border-gray-300 text-left bg-gray-100 md:text-base xs:text-sm">
                                                        Egyptian Size
                                                      </th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    {section.data.map(
                                                      (row, indexRow) => (
                                                        <tr
                                                          key={indexRow}
                                                          className="group/size">
                                                          <td className="py-2 px-4 border-b border-gray-50 group-hover/size:bg-gray-100 bg-gray-200">
                                                            {row[0]}
                                                          </td>
                                                          <td className="py-2 px-4 border-b border-gray-300 group-hover/size:bg-gray-200 bg-gray-100">
                                                            {row[1]}
                                                          </td>
                                                        </tr>
                                                      )
                                                    )}
                                                  </tbody>
                                                </table>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>

                                      {/* How To Measure Part! */}
                                      <div className="mt-5 pt-2 border-t-2 border-gray-800">
                                        <div
                                          className="flex space-x-2 cursor-pointer w-fit border-b-2 border-gray-500 hover:border-gray-400 rounded-md px-[2px]"
                                          onClick={() =>
                                            setIsMeasureButton(!isMeasureButton)
                                          }>
                                          <button
                                            type="button"
                                            className="text-gray-900 md:text-2xl xs:text-xl focus:outline-none">
                                            How To Measure
                                          </button>

                                          <button
                                            type="button"
                                            className="md:text-2xl xs:text-xl font-bold focus:outline-none">
                                            {isMeasureButton ? (
                                              <RemoveRoundedIcon fontSize="medium" />
                                            ) : (
                                              <AddRoundedIcon />
                                            )}
                                          </button>
                                        </div>

                                        {isMeasureButton && (
                                          <>
                                            <div className="flex justify-between items-start">
                                              <div className="flex flex-col">
                                                <div className="w-[100%]">
                                                  <h3 className="md:text-xl xs:text-md font-bold mb-1 mt-3">
                                                    Measure your foot length
                                                  </h3>

                                                  <p className=" sm:text-lg xs:text-base">
                                                    Standing, barefoot on a
                                                    sheet, stick your heel to
                                                    the wall. Use a pencil to
                                                    trace the outline of the
                                                    foot. Measure the length of
                                                    your foot from your heel to
                                                    your largest toe.
                                                  </p>
                                                </div>

                                                <div className="w-[50%] mx-auto">
                                                  <img
                                                    className="w-[100%] object-contain"
                                                    src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748678324/xyzzsivfpchfjqwfwlp4.png"
                                                    alt="How To Measure Your Foot Photo"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        )}

                        {/* Size Guide Table Part For (Men's & Women's & Kids Clothing). */}
                        {(product.category === "Men's T-shirts" ||
                          product.category === "Men's Pants" ||
                          product.category === "Women's Pants" ||
                          product.category === "Women's Tops" ||
                          product.category === "Kids Clothing") && (
                          <>
                            <motion.button
                              className="mt-4 text-gray-700 border-b-2 border-gray-500 hover:border-gray-300 rounded-md px-[2px]"
                              onClick={() => setIsSizeGuide(!isSizeGuide)}
                              type="button"
                              title="Size guide"
                              initial={{ opacity: 0, x: 50 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 1.2
                              }}>
                              <h2>
                                <StraightenRoundedIcon
                                  className="text-gray-700"
                                  fontSize="small"
                                />{" "}
                                Size guide
                              </h2>
                            </motion.button>

                            {isSizeGuide && (
                              <>
                                <div className="tracking-wider absolute z-10 inset-0 bg-black/50 flex items-center justify-center">
                                  <div
                                    className="xl:w-[64%] lg:w-[78%] lg:h-[80%] w-[95%] h-[60%] bg-gray-300 backdrop-blur-3xl px-5 pt-5 rounded-md shadow-2xl"
                                    ref={sizeGuideRef}>
                                    <div className="flex justify-between items-center border-b-2 border-gray-800 pb-2">
                                      <h3 className="font-semibold text-2xl text-gray-900">
                                        Size Guide Table
                                      </h3>

                                      <DangerousRoundedIcon
                                        className="cursor-pointer text-gray-700 w-fit h-fit rounded-full"
                                        fontSize="large"
                                        onClick={() => setIsSizeGuide(false)}
                                      />
                                    </div>

                                    <div className="overflow-auto xl:h-[88%] xs:h-[90%] mt-4 pr-2">
                                      <div className="overflow-auto h-[60%] pr-2">
                                        <div className="xs:p-0 md:py-2 space-y-12 max-w-4xl mx-auto">
                                          {sizeTableForTop_Bottom.map(
                                            (section, indexSection) => (
                                              <div key={indexSection}>
                                                <h2 className="text-xl font-semibold mb-4">
                                                  {section.title}
                                                  <span className="text-lg font-medium mb-2">
                                                    {" "}
                                                    — {section.subTitle}
                                                  </span>
                                                </h2>

                                                <div className="overflow-x-auto no-scrollbar">
                                                  <table className="min-w-full border-2 border-gray-300 text-sm rounded-xl overflow-hidden text-center">
                                                    <thead className="bg-gray-100">
                                                      <tr>
                                                        {section.headers.map(
                                                          (
                                                            header,
                                                            indexHeader
                                                          ) => (
                                                            <th
                                                              key={indexHeader}
                                                              className="border border-gray-300 px-4 py-2 font-medium md:text-base xs:text-sm">
                                                              {header}
                                                            </th>
                                                          )
                                                        )}
                                                      </tr>
                                                    </thead>
                                                    <tbody className="mx-auto">
                                                      {section.data.map(
                                                        (row, indexRow) => (
                                                          <tr
                                                            key={indexRow}
                                                            className="odd:bg-white even:bg-gray-50 md:text-base xs:text-sm">
                                                            {row.map(
                                                              (
                                                                data,
                                                                indexRow
                                                              ) => (
                                                                <td
                                                                  key={indexRow}
                                                                  className="border border-gray-200 p-2 md:text-base xs:text-sm">
                                                                  {data}
                                                                </td>
                                                              )
                                                            )}
                                                          </tr>
                                                        )
                                                      )}
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      </div>

                                      {/* How To Measure Part! */}
                                      <div className="mt-5 pt-2 border-t-2 border-gray-800">
                                        <div
                                          className="flex space-x-2 cursor-pointer w-fit border-b-2 border-gray-500 hover:border-gray-400 rounded-md px-[2px]"
                                          onClick={() =>
                                            setIsMeasureButton(!isMeasureButton)
                                          }>
                                          <button
                                            type="button"
                                            className="text-gray-900 md:text-2xl xs:text-2xl focus:outline-none">
                                            How To Measure
                                          </button>

                                          <button
                                            type="button"
                                            className="md:text-2xl xs:text-xl font-bold focus:outline-none">
                                            {isMeasureButton ? (
                                              <RemoveRoundedIcon fontSize="medium" />
                                            ) : (
                                              <AddRoundedIcon />
                                            )}
                                          </button>
                                        </div>

                                        {(product.category === "Women's Tops" ||
                                          product.category ===
                                            "Women's Pants") &&
                                          isMeasureButton && (
                                            <>
                                              <div className="flex justify-between items-start">
                                                <div className="flex flex-col">
                                                  <div className="w-[100%]">
                                                    <h3 className="text-lg font-bold mb-1 mt-3">
                                                      To measure your clothing
                                                      size follow these
                                                      instructions:
                                                    </h3>

                                                    {[
                                                      {
                                                        h2: "1. Bust",
                                                        P: "To get the right shirt size run a flexible tape measure across the fullest area of your bust, holding the tape measure horizontally."
                                                      },
                                                      {
                                                        h2: "2. Waist",
                                                        P: "Measure around the narrowest part of the waist, keeping the tape horizontally."
                                                      },
                                                      {
                                                        h2: "3. Hips",
                                                        P: "Stand with your feet together and measure around the fullest point of the hip, keeping the tape measure horizontally."
                                                      }
                                                    ].map((data, index) => (
                                                      <div key={index}>
                                                        <h2 className="text-[var(--primary-color)] text-lg">
                                                          {data.h2}
                                                        </h2>

                                                        <p className="py-2">
                                                          {data.P}
                                                        </p>
                                                      </div>
                                                    ))}
                                                  </div>

                                                  <div className="w-[50%] mx-auto">
                                                    <img
                                                      className="w-[100%] object-contain"
                                                      src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748678434/w7e2iq4dzaissgp50jzk.png"
                                                      alt="How To Measure Your Tops & Pants Sizes For Women Photo"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </>
                                          )}

                                        {(product.category ===
                                          "Men's T-shirts" ||
                                          product.category === "Men's Pants") &&
                                          isMeasureButton && (
                                            <>
                                              <div className="flex justify-between items-start">
                                                <div className="flex flex-col">
                                                  <div className="w-[100%]">
                                                    <h3 className="text-lg font-bold mb-1 mt-3">
                                                      To measure your clothing
                                                      size follow these
                                                      instructions:
                                                    </h3>

                                                    {[
                                                      {
                                                        h2: "1. Neck",
                                                        P: "Use the tape to measure around the base of your neck, where it meets your shoulders. Put a finger between your neck and the tape measure for a more loose fit collar."
                                                      },
                                                      {
                                                        h2: "2. Sleeve",
                                                        P: "Bend your elbow and put your hand on your hip. Ask your friend to measure from middle of back of your neck, around shoulder and elbow to wrist bone."
                                                      },
                                                      {
                                                        h2: "3. Chest",
                                                        P: "This measurement should be taken beneath your armpits, around the widest part of your chest and shoulder blades. Make sure to keep the tape measure horizontal, and don’t pull to tight or hold your breath while measuring."
                                                      },
                                                      {
                                                        h2: "4. Waist",
                                                        P: "Put the tape around your natural waistline, which should be close to your bellybutton. Put one finger between the tape and your body before you measure."
                                                      },
                                                      {
                                                        h2: "5. Inseam (Leg Length)",
                                                        P: "This is measured between your groin and your lower ankle. You might find that is most easily measured on a pair of pants that already suit you."
                                                      }
                                                    ].map((data, index) => (
                                                      <div key={index}>
                                                        <h2 className="text-[var(--primary-color)] text-lg">
                                                          {data.h2}
                                                        </h2>

                                                        <p className="py-2">
                                                          {data.P}
                                                        </p>
                                                      </div>
                                                    ))}
                                                  </div>

                                                  <div className="w-[50%] mx-auto">
                                                    <img
                                                      className="w-[100%] object-contain"
                                                      src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748678349/wfeiadzqnplxug8u4i21.png"
                                                      alt="How To Measure Your Tops & Pants Sizes For Men Photo"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </>
                                          )}

                                        {product.category === "Kids Clothing" &&
                                          isMeasureButton && (
                                            <>
                                              <div className="flex justify-between items-start">
                                                <div className="flex flex-col">
                                                  <div className="w-[100%]">
                                                    <h3 className="text-lg font-bold mb-1 mt-3">
                                                      To measure your clothing
                                                      size follow these
                                                      instructions:
                                                    </h3>

                                                    {[
                                                      {
                                                        h2: "1. Chest",
                                                        P: "Wrap a measuring tape around your child's chest, just under the arms at the widest point is best. Leave a little room for extra comfort."
                                                      },
                                                      {
                                                        h2: "2. Waist",
                                                        P: "Measure around the natural waistline which is just above the hips, holding the tape lightly loose for a comfortable fit."
                                                      },
                                                      {
                                                        h2: "3. Hips",
                                                        P: "Standing with their legs together, measure around the widest part of your child’s hips."
                                                      },
                                                      {
                                                        h2: "4. Height",
                                                        P: "Get your child to stand barefoot, and measure from their heel to the top of their head. It can be easier to make a mark on a wall or doorframe and measure their height from there - it's also a fun way for you to track how much they’ve grown."
                                                      }
                                                    ].map((data, index) => (
                                                      <div key={index}>
                                                        <h2 className="text-[var(--primary-color)] text-lg">
                                                          {data.h2}
                                                        </h2>

                                                        <p className="py-2">
                                                          {data.P}
                                                        </p>
                                                      </div>
                                                    ))}
                                                  </div>

                                                  <div className="w-[50%] mx-auto">
                                                    <img
                                                      className="w-[100%] object-contain"
                                                      src="https://res.cloudinary.com/dkby0jbe3/image/upload/v1748678349/kfex7lh2qpdmdcn2l0eb.png"
                                                      alt="How To Measure Your Boy & Girl Sizes For Kids Photo"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </>
                                          )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </motion.div>

                      {/* Select Quantity Part */}
                      <motion.div
                        className={`${
                          isLoading
                            ? "pointer-events-none"
                            : "pointer-events-auto"
                        } mt-4`}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 1.2
                        }}>
                        <h2 className="text-lg font-bold text-gray-700 mb-1">
                          Select Quantity:
                        </h2>

                        <div className="flex">
                          <button
                            type="button"
                            title="Decrease Quantity"
                            onClick={() => handleDecreaseQuantity()}
                            className={`${
                              selectQuantity === 0 && "cursor-not-allowed"
                            } relative flex justify-center items-center h-10 w-10 border border-gray-300`}>
                            <RemoveRoundedIcon fontSize="small" />

                            <div
                              className={`${
                                selectQuantity === 0 &&
                                "absolute bg-white/70 inset-0"
                              } `}></div>
                          </button>

                          <div className="flex justify-center items-center h-10 w-10 border border-gray-300">
                            {isSizeSelected === 0 ? 0 : selectQuantity}
                          </div>

                          <button
                            type="button"
                            onClick={() => handleIncreaseQuantity()}
                            title="Increase Quantity"
                            className={`${
                              (selectQuantity >= 15 ||
                                isSizeSelected === null) &&
                              "cursor-not-allowed"
                            } relative flex justify-center items-center h-10 w-10 border border-gray-300`}>
                            <AddRoundedIcon fontSize="small" />

                            <div
                              className={`${
                                (selectQuantity >= 15 ||
                                  isSizeSelected === null) &&
                                "absolute bg-white/70 inset-0"
                              } `}></div>
                          </button>
                        </div>
                      </motion.div>

                      {/* Border Line Part! */}
                      <motion.div
                        className="border-[1.5px] mt-5 border-gray-300 mb-5 bg-gray-300 overflow-hidden"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 1.29
                        }}
                      />

                      {/* Cart & Wishlist Buttons Part! */}
                      <div
                        className={`${
                          isLoading
                            ? "pointer-events-none"
                            : "pointer-events-auto"
                        } flex items-center gap-5`}>
                        {/* Add To Cart Button */}
                        <motion.div
                          onClick={() => {
                            handleAddToCartButton();
                          }}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 1.3
                          }}>
                          <Button
                            title={isAddedToCart ? "load" : "Add To Cart"}
                            titleHovering={
                              isAddedToCart ? "loading..." : "Add To Cart"
                            }
                          />
                        </motion.div>

                        {/* Wishlist Button */}
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 1.4
                          }}
                          onClick={() => {
                            const existingIndex = favorites.findIndex(
                              (favorite) =>
                                favorite.productId === product.id &&
                                favorite.productName === product.name
                            );
                            if (existingIndex === -1) {
                              dispatch(
                                addProductToFavorite({
                                  productId: product.id,
                                  productName: product.name
                                })
                              );
                              toastSuccess("Added to wishlist successfully!");
                            } else {
                              dispatch(
                                removeProductFromFavorite({
                                  productId: product.id,
                                  productName: product.name
                                })
                              );
                              toastSuccess("product removed successfully!");
                            }
                          }}>
                          <Button
                            title={
                              favorites.some(
                                (favorite) =>
                                  favorite.productId === product.id &&
                                  favorite.productName === product.name
                              )
                                ? "Remove"
                                : "Wishlist"
                            }
                            titleHovering={
                              favorites.some(
                                (favorite) =>
                                  favorite.productId === product.id &&
                                  favorite.productName === product.name
                              )
                                ? "Tap To Remove"
                                : "Add To Wishlist"
                            }
                            iconFavorite={
                              favorites.some(
                                (favorite) =>
                                  favorite.productId === product.id &&
                                  favorite.productName === product.name
                              ) ? (
                                <FavoriteRoundedIcon />
                              ) : (
                                <FavoriteBorderOutlinedIcon />
                              )
                            }
                          />
                        </motion.div>
                      </div>
                    </div>
                  </>
                ))}
              </section>

              {/* Border Line Part! */}
              <motion.div
                className="border-[1.6px] border-[var(--primary-color)] xs:mx-5 sm:mx-10"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.5
                }}></motion.div>
            </section>

            {/* Related Products Section */}
            {relatedProductsFiltration && (
              <section className="sm:px-10 xs:px-5 bg-white/50 overflow-hidden ">
                {/* Title & View All Button! */}
                <div className="flex justify-between items-start xs:mt-8 lg:mt-10">
                  <motion.div
                    className="inline-block"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}>
                    <h2 className="lg:text-4xl text-start md:text-3xl xs:text-[22px] font-bold text-[#124030]">
                      Related Products
                    </h2>
                    <div className="h-[3px] w-[90%] mx-auto bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
                  </motion.div>

                  <motion.div
                    className="z-[15]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}>
                    <Link
                      to={`/categories/${
                        productDetails[Number(id) - 1]?.category
                      }/`}
                      onClick={() => scrollToTop()}>
                      <Button
                        title="View All"
                        titleHovering="View All Related Product"
                        type="button"
                      />
                    </Link>
                  </motion.div>
                </div>

                <div className="relative xs:pt-8 lg:pt-10 md:px-14 bg-white/50">
                  {/* Shadow Left */}
                  <div className="absolute md:left-14 sm:left-0 top-0 h-full sm:w-5 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

                  {/* Shadow Right */}
                  <div className="absolute md:right-14 sm:right-0 top-0 h-full sm:w-5 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                  {/* Previous Button! */}
                  <motion.div
                    className="absolute md:left-1 xs:left-0  md:top-[40%] xs:top-[50%] z-10"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}>
                    <Button
                      type="button"
                      titleHovering="Previous"
                      className="swiper-allRelatedProducts-prev rounded-full w-10 h-10 py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0"
                      classNameArrows="ml-0 rotate-180"
                    />
                  </motion.div>

                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
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
                      prevEl: ".swiper-allRelatedProducts-prev",
                      nextEl: ".swiper-allRelatedProducts-next"
                    }}
                    breakpoints={{
                      300: { slidesPerView: 1 },
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                      1280: { slidesPerView: 4 }
                    }}
                    className="mySwiper">
                    {visibleCards.map((product, index) => (
                      <>
                        {product.name !== nameFiltration?.name && (
                          <SwiperSlide key={index}>
                            <div className="border-2 bg-white rounded-lg w-full sm:max-w-[340px]">
                              <Product product={product} />
                            </div>
                          </SwiperSlide>
                        )}
                      </>
                    ))}
                  </Swiper>

                  {/* Next Button! */}
                  <motion.div
                    className="absolute md:right-1 sm:right-0 xs:-right-0 md:top-[40%] xs:top-[50%] z-10"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}>
                    <Button
                      type="button"
                      titleHovering="Next"
                      className="swiper-allRelatedProducts-next rounded-full py-[7px] px-[7px] pointer-events-auto xs:h-fit z-10 p-2 pl-0"
                      classNameArrows="ml-0"
                    />
                  </motion.div>
                  <div className="swiper-products-pagination pb-8 pt-8"></div>
                </div>
              </section>
            )}
          </>
        ) : (
          <NotFound />
        )}
      </section>
    </>
  );
}
