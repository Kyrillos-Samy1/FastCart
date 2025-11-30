import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { FaRegTrashCan } from "react-icons/fa6";
import { toastSuccess } from "../ui/utils";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/reduxStore";
import { motion } from "framer-motion";

import {
  clearCart,
  clearProductsCartLength,
  pushTotalPrice,
  reduceNumberOfProductsLength,
  removeProductFromCart,
  updateQuantity
} from "../../Redux/productDetailsSlice";
import {
  setIsSureToClearCart,
  setIsSureToRemoveProduct
} from "../../Redux/cartSlice";

interface productsCartProps {
  id: number;
  variantKey?: string;
  idImg: number;
  sizeID?: number;
  indexImageNumber: number;
  indexSize?: number;
  photo: string;
  name: string;
  categoryName: string;
  subCategory?: string;
  color: string;
  colorHexa: string;
  size?: string;
  quantity: number;
  price: string;
  width?: number;
  height?: number;
}

export default function Cart() {
  const isSureToRemoveProduct = useSelector(
    (state: RootState) => state.cartSlice?.isSureToRemoveProduct
  );

  const isSureToClearAllProducts = useSelector(
    (state: RootState) => state.cartSlice?.isSureToClearCart
  );

  const [indexProductToDelete, setIndexProductToDelete] = useState<number>(0);

  const productsCart: productsCartProps[] = useSelector(
    (state: RootState) => state.productsCartSlice?.productsCart
  );

  const totalPrice = productsCart.reduce((acc, product) => {
    const price = parseFloat(product.price.replace("$", ""));
    return acc + price * product.quantity;
  }, 0);

  const sureToRemoveProductOpen = useRef<HTMLDivElement | null>(null);

  const sureToClearProductOpen = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleClearCart() {
    setIsLoading(true);
    dispatch(setIsSureToClearCart(true));
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        sureToRemoveProductOpen.current &&
        !sureToRemoveProductOpen.current.contains(target)
      ) {
        dispatch(setIsSureToRemoveProduct(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        sureToClearProductOpen.current &&
        !sureToClearProductOpen.current.contains(target)
      ) {
        setIsLoading(false);
        dispatch(setIsSureToClearCart(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSureToClearAllProducts || isSureToRemoveProduct) {
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
  }, [isSureToClearAllProducts, dispatch, isSureToRemoveProduct]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* In Case Cart is Empty. */}
      {productsCart.length === 0 ? (
        <div className="relative flex justify-center items-center h-screen w-full bg-gray-200 tracking-wider overflow-hidden">
          {/* Glowing gradient balls */}
          <motion.div
            className="pointer-events-none absolute blur-sm w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400/25 to-emerald-400/15 -bottom-20 left-0"
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.9, 1, 0.9],
              y: [0, -20, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-96 h-96 rounded-full bg-gradient-to-br from-emerald-400/25 to-emerald-400/15 -top-5 bottom-26 -right-28"
            animate={{
              scale: [0.9, 1, 0.9],
              opacity: [0.8, 1, 0.8],
              x: [0, 20, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-60 h-60 rounded-full bg-gradient-to-tl from-emerald-400/25 to-emerald-400/15 bottom-10 right-10"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [1, 0.8, 1],
              y: [0, 15, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="flex flex-col justify-center items-center xl:w-[50%] lg:w-[65%] md:w-[85%] xs:w-[88%] ">
            {/* Cart Image. */}
            <motion.div
              className="w-[70%] flex justify-center"
              initial={{ opacity: 0, x: -30, rotate: -12 }}
              whileInView={{
                opacity: 1,
                x: [-50, 0, -50],
                rotate: [-12, -2.5, -12]
              }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                x: { repeat: Infinity, duration: 4 },
                rotate: { repeat: Infinity, duration: 4 }
              }}>
              <img
                src="/Cart & Favorite Photos/Empty Cart.png"
                alt="Empty Cart Photo"
                className="md:w-[45%] xs:w-[65%]"
              />
            </motion.div>

            {/* Empty Cart Text. */}
            <motion.div
              className="backdrop-blur-sm md:shadow-lg rounded-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}>
              <div className="flex flex-col justify-center items-center gap-y-5 md:pb-10 md:px-10 ">
                <motion.h2
                  className="xs:text-2xl md:text-4xl text-gray-700 font-bold text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}>
                  Your Cart is <span className="text-emerald-700">Empty!</span>
                </motion.h2>

                <motion.h2
                  className="xs:text-lg md:text-[22px] text-gray-700 font-bold text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}>
                  Oops! Looks like your cart is feeling lonely. Add some items
                  and make its day!{" "}
                </motion.h2>

                {/* Go Shopping Button. */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}>
                  <Link to="/products">
                    <Button
                      title="Go Shopping"
                      className="uppercase tracking-wider"
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        // In Case Cart has Products.
        <section className="xs:pt-28 lg:pt-36 sm:px-10 xs:px-5 tracking-wider relative overflow-hidden">
          {/* Glowing gradient balls. */}
          <motion.div
            className="pointer-events-none absolute blur-sm w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400/25 to-emerald-400/15 -bottom-20 left-0"
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.9, 1, 0.9],
              y: [0, -20, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400/25 to-emerald-400/15 -top-5 bottom-26 -right-28"
            animate={{
              scale: [0.9, 1, 0.9],
              opacity: [0.8, 1, 0.8],
              y: [0, 20, 0]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div
            className="pointer-events-none absolute blur-sm w-52 h-52 rounded-full bg-gradient-to-tl from-emerald-400/25 to-emerald-400/15 bottom-10 right-10"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [1, 0.8, 1],
              y: [0, 15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity }}
          />

          <div className="flex justify-between items-start w-full md:mb-12 xs:mb-8">
            <div className="w-full">
              <div className="flex justify-between items-center w-full">
                {/* Title Part. */}
                <motion.div
                  className="w-fit"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}>
                  <h2 className="lg:text-4xl text-start w-fit md:text-3xl xs:text-[22px] font-bold text-[#124030]">
                    Your Cart
                  </h2>
                  <div className="h-[3px] w-[90%] mx-auto bg-gradient-to-r from-transparent via-[#124030] to-transparent rounded-full"></div>
                </motion.div>

                {/* Clear All Button. */}
                <motion.button
                  type="button"
                  title="Clear All"
                  onClick={handleClearCart}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}>
                  <Button title={isLoading ? "load" : "Clear All"} />
                </motion.button>
              </div>

              {/* Cart Products Count. */}
              <div className="w-fit mx-auto xs:mt-3 md:mt-0">
                <motion.h2
                  className="backdrop-blur-lg text-xl text-[#124030] font-semibold border-b-[3px] border-[#124030] rounded-lg p-1 pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}>
                  {productsCart?.length}{" "}
                  {productsCart?.length > 1 ? "Items" : "Item"} in Cart
                </motion.h2>
              </div>
            </div>
          </div>

          {/* Cart Products. */}
          <motion.div
            className="pb-[50px] grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            {productsCart?.map((product, indexProduct) => (
              <motion.div
                key={indexProduct}
                variants={childVariants}
                className="backdrop-blur-3xl w-full h-full shadow-lg bg-emerald-300/35 border-l-8 border-emerald-600/80 rounded-3xl p-3">
                <div className="flex justify-between h-full">
                  <div className="relative w-[50%] sm:max-h-[200px] xs:h-full">
                    <Link
                      to={`/productDetails/${product.id}#productDetails`}
                      className="w-[43%]">
                      <img
                        src={product.photo}
                        alt="Product Image"
                        title="Go To Product Details Page"
                        className="object-contain bg-gray-100 sm:max-h-[200px] xs:h-full w-[100%] rounded-3xl cursor-pointer shadow-xl hover:scale-95 transition-all duration-500 ease-in-out"
                      />
                    </Link>
                  </div>

                  <div className="w-[45%]">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <h2
                          title={product.name}
                          className="text-gray-800 text-2xl text-ellipsis whitespace-nowrap tracking-wide font-semibold overflow-hidden">
                          {product.name}
                        </h2>

                        <h3 className="text-lg text-gray-800">
                          {product.categoryName}
                        </h3>

                        <h3 className="text-lg text-gray-800 flex flex-wrap items-center gap-1">
                          Color:{" "}
                          <div
                            style={{ backgroundColor: product.colorHexa }}
                            title={product.color}
                            aria-label={product.color}
                            className="w-5 h-5 rounded-full border"></div>
                        </h3>

                        <h3 className="text-lg text-gray-800">
                          {product.categoryName === "Electronics" &&
                          (product.subCategory === "Mobile" ||
                            product.subCategory === "Flash Disk")
                            ? "Storage:"
                            : product?.categoryName === "Home Appliances" &&
                              (product?.subCategory === "Washing Machine" ||
                                product?.subCategory === "Espresso Maker")
                            ? "Capacity:"
                            : "Size:"}{" "}
                          {(product?.categoryName === "Home Appliances" &&
                            (product?.subCategory === "Fridge" ||
                              product?.subCategory === "Gas Stove" ||
                              product?.subCategory === "Microwave" ||
                              product?.subCategory === "Toaster")) ||
                          product.categoryName === "Women's Bags" ||
                          (product?.categoryName === "Electronics" &&
                            (product?.subCategory === "Mouse" ||
                              product?.subCategory === "Keyboard"))
                            ? ` ${product.width}W * ${product.height}${
                                product?.categoryName === "Electronics" &&
                                (product?.subCategory === "Mouse" ||
                                  product?.subCategory === "Keyboard")
                                  ? "L"
                                  : "H"
                              }`
                            : String(product.size)}
                        </h3>

                        <label
                          className="text-lg text-gray-800"
                          htmlFor="quantity">
                          Qty:
                        </label>
                        <select
                          id="quantity"
                          value={product.quantity}
                          onChange={(event) => {
                            console.log(
                              product.id,
                              Number(event.target.value),
                              product.idImg,
                              product.color,
                              product.height ?? 0,
                              product.width ?? 0,
                              product.size ?? ""
                            );
                            dispatch(
                              updateQuantity({
                                variantKey: product?.variantKey,
                                quantity: Number(event.target.value)
                              })
                            );
                          }}
                          className="ml-2 border-2 border-[var(--primary-color)] rounded pl-1 pr-8 bg-white appearance-none focus:outline-none cursor-pointer relative xs:mb-2 1xl:mb-0"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg fill='none' stroke='%23666' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 0.75rem center",
                            backgroundSize: "1em"
                          }}>
                          {[...Array(15)].map((_, num) => (
                            <option key={num + 1} value={num + 1}>
                              {num + 1}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex justify-between items-center">
                        <h2 className="text-2xl text-gray-800">
                          {product.price}
                        </h2>

                        <div
                          className="group focus:outline-none w-10 h-10 rounded-full ring-1 ring-gray-400 bg-white flex justify-center items-center cursor-pointer"
                          onClick={() => {
                            setIndexProductToDelete(indexProduct);
                            dispatch(setIsSureToRemoveProduct(true));
                          }}
                          aria-label="Delete Product"
                          title="Delete Product">
                          <button
                            type="button"
                            onClick={() => {
                              setIndexProductToDelete(indexProduct);
                              dispatch(setIsSureToRemoveProduct(true));
                            }}
                            aria-label="Delete Product"
                            title="Delete Product"
                            className=" group-hover:scale-105 transition-all duration-500 ease-in-out shadow-2xl text-xl text-gray-600">
                            <FaRegTrashCan />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sure To Remove Product Part! */}
          <div
            className={`${
              isSureToRemoveProduct
                ? "1xl:top-[94px] xl:top-[93.5px] xs:top-[77.5px] translate-y-0"
                : "-top-[100%] -translate-y-[50%]"
            } fixed left-1/2 -translate-x-1/2 z-10 w-full pointer-events-auto transition-all duration-500 ease-in-out flex justify-center`}>
            <div
              className="lg:w-[35%] md:w-[50%] sm:w-[70%] xs:w-[90%] h-fit bg-gray-300 flex flex-col justify-between px-5 py-10 rounded-2xl "
              ref={sureToRemoveProductOpen}>
              <h2 className="text-xl text-center font-bold text-gray-700 mb-8">
                Are you sure you want to remove this product from your cart?
              </h2>

              <div className="flex justify-around border-t-[1.6px] border-gray-500 pt-8">
                <div
                  onClick={() => {
                    dispatch(setIsSureToRemoveProduct(false));
                    toastSuccess("Product Successfully Removed!");
                    dispatch(reduceNumberOfProductsLength());

                    //! Remove the product from the cart array

                    if (productsCart[indexProductToDelete]) {
                      dispatch(
                        removeProductFromCart({
                          id: productsCart[indexProductToDelete].id,
                          color: productsCart[indexProductToDelete].color,
                          size: productsCart[indexProductToDelete].size,
                          width: productsCart[indexProductToDelete].width,
                          height: productsCart[indexProductToDelete].height
                        })
                      );
                    }
                  }}>
                  <Button title="Yes" />
                </div>

                <div
                  onClick={() => {
                    setIsLoading(false);
                    dispatch(setIsSureToRemoveProduct(false));
                  }}>
                  <Button title="No" />
                </div>
              </div>
            </div>
          </div>

          {/* Sure To Clear All Products */}
          <div
            className={`${
              isSureToClearAllProducts
                ? "1xl:top-[94px] xl:top-[93.5px] xs:top-[77.5px] translate-y-0"
                : "-top-[55%] -translate-y-[50%]"
            } pointer-events-auto h-full left-[50%] -translate-x-[50%] fixed z-10 w-full transition-all duration-500 ease-in-out flex justify-center`}>
            <div
              className="lg:w-[35%] md:w-[50%] sm:w-[70%] xs:w-[90%] h-fit bg-gray-300 flex flex-col justify-between px-5 py-10 rounded-2xl "
              ref={sureToClearProductOpen}>
              <h2 className="text-xl text-center font-bold text-gray-700 mb-8">
                Are you sure you want to clear all products from your cart?
              </h2>

              <div className="flex justify-around border-t-[1.6px] border-gray-500 pt-8">
                <div
                  onClick={() => {
                    setIsLoading(false);
                    dispatch(setIsSureToClearCart(false));
                    toastSuccess("Cart Cleared Successfully!");

                    //! Clear the products from the cart array

                    dispatch(clearCart());

                    dispatch(clearProductsCartLength());
                  }}>
                  <Button title="Yes" />
                </div>

                <div
                  onClick={() => {
                    setIsLoading(false);
                    dispatch(setIsSureToClearCart(false));
                  }}>
                  <Button title="No" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center md:justify-around xs:justify-between py-10 border-t-[3.5px] border-[var(--primary-color)]">
            {/* Total Price. */}
            <motion.h2
              className="text-3xl text-emerald-800"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}>
              Total: <span className="">{`$${totalPrice}`}</span>
            </motion.h2>

            {/* Checkout Button. */}
            <Link
              to={`/checkout/cartId/${Math.floor(Math.random() * 1000000)}`}>
              <motion.button
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                type="button"
                title="Checkout"
                onClick={() => dispatch(pushTotalPrice(totalPrice))}>
                <Button
                  title="Checkout"
                  titleHovering="Go To Checkout"
                  type="button"
                />
              </motion.button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
