import Button from "../ui/Button";
import { useRef, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import "react-toastify/dist/ReactToastify.css";
import { scrollToTop, toastError, toastSuccess } from "../ui/utils";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/reduxStore";
import {
  addProductToFavorite,
  removeProductFromFavorite
} from "../../Redux/wishlistSlice";

interface ProductProps {
  product: {
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
  };
}

export default function Product({ product }: ProductProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const [isVideo, setIsVideo] = useState<boolean>(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [hasVideoError, setHasVideoError] = useState(false); //! To control the video error!

  const handleMouseEnter = () => {
    setIsHovered(true);

    if (videoRef.current) {
      if (!hasVideoError) {
        videoRef.current?.play();
      } else {
        setTimeout(() => {
          toastError("Video Failed To Load!");
        }, 1000);
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; //! Reset video to start
    }
  };

  const favorites = useSelector(
    (state: RootState) => state.wishlistSlice.favoriteProducts
  );

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div
        className="h-full w-full group/heart p-4"
        key={product.id}
        onMouseEnter={() => setIsVideo(false)}
        onMouseLeave={() => setIsVideo(true)}>
        <div
          onMouseEnter={() => {
            handleMouseEnter();
            setIsVideo(true);
          }}
          onMouseLeave={() => {
            handleMouseLeave();
            setIsVideo(false);
          }}
          className="relative cursor-pointer transition-transform transform hover:scale-105 duration-500 ease-in-out overflow-hidden">
          <Link
            to={`/productDetails/${product.id}#productDetails`}
            onClick={() => {
              scrollToTop();
            }}>
            <div className="relative w-full h-[300px] bg-gray-100 mx-auto overflow-hidden rounded-b-3xl rounded-t-md transition-all duration-700">
              <div
                className={`${
                  isVideo ? "-top-96" : "top-0"
                } absolute h-full w-full bg-black bg-opacity-50 z-20 rounded-b-3xl rounded-t-md transition-all duration-500`}></div>
              <video
                ref={videoRef}
                onError={() => {
                  setHasVideoError(true);
                }}
                onLoadedData={() => {
                  setHasVideoError(false);
                }}
                title={product.name}
                className={`absolute h-full w-full object-cover rounded-b-3xl bg-gray-100 rounded-t-md ease-in-out transition-all duration-500 ${
                  isHovered ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                src={product.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />

              <img
                className={`absolute h-full w-full object-contain mx-auto bg-gray-100 rounded-b-3xl rounded-t-md ease-in-out transition-all duration-500 overflow-hidden ${
                  isHovered && !hasVideoError
                    ? "opacity-0 z-0"
                    : "opacity-100 z-10"
                }`}
                src={product.img}
                alt={product.name}
                title={product.name}
              />
            </div>
          </Link>

          <button
            type="button"
            title={
              favorites.find(
                (favorite) =>
                  favorite.productId === product.id &&
                  favorite.productName === product.name
              )
                ? "Remove From Wishlist"
                : "Add To Wishlist"
            }
            aria-label={
              favorites.find(
                (favorite) =>
                  favorite.productId === product.id &&
                  favorite.productName === product.name
              )
                ? "Remove From Wishlist"
                : "Add To Wishlist"
            }
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
            }}
            className={` absolute group-hover/heart:right-3 top-2 z-20 -right-32 border-[1px] border-[var(--primary-color)] transition-all duration-500 ease-in-out flex justify-center items-center bg-gray-100/85 rounded-full w-10 h-10`}>
            {" "}
            {favorites.some(
              (favorite) =>
                favorite.productId === product.id &&
                favorite.productName === product.name
            ) ? (
              <FavoriteRoundedIcon className="scale-[1.3] text-[var(--primary-color)]" />
            ) : (
              <FavoriteBorderOutlinedIcon className="scale-[1.3] text-[var(--primary-color)]" />
            )}
          </button>

          <div className="absolute z-20 top-2 -left-36 group-hover/heart:left-3 transition-all duration-500 ease-in-out flex justify-center items-center rounded-lg w-fit h-fit">
            <h4
              className={`font-bold text-lg tracking-wide px-2 py-1 rounded-lg bg-gray-100/85
              ${
                product.quantity === "Out Of Stock"
                  ? "text-red-500 border-[1px] border-red-500"
                  : "text-[var(--primary-color)] border-[1px] border-[var(--primary-color)]"
              }`}>
              {product.quantity === "Out Of Stock"
                ? "Out Of Stock"
                : "In Stock"}
            </h4>
          </div>
        </div>

        <div className="flex justify-center items-center mt-2">
          <div className="w-16 h-1 bg-[var(--primary-color)] rounded-full"></div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex justify-between items-start">
            <h5
              title={product.name}
              className="text-2xl text-start font-bold text-[var(--primary-text-color)] w-[60%] tracking-wide overflow-hidden text-ellipsis whitespace-nowrap">
              {product.name.split(" ").slice(0, 2).join(" ")}
            </h5>
            <div className="flex gap-2 justify-between items-start">
              <h5 className="text-xl font-bold text-[var(--primary-text-color)] tracking-wide">
                ${product.After_Discount}
              </h5>

              <h5 className="text-lg font-bold text-[var(--secondary-text-color)] tracking-wide line-through">
                {product.Pre_Discount !== null && `$${product.Pre_Discount}`}
              </h5>
            </div>
          </div>

          <p className="text-lg font-bold text-start text-[var(--secondary-text-color)] w-[75%] tracking-wide overflow-hidden text-ellipsis whitespace-nowrap">
            {product.category.split(" ").slice(0, 2).join(" ")}{" "}
            {(product.category === "Kids Clothing" ||
              product.category === "Kids Shoes") &&
              (product.subCategory === "Kids Boys"
                ? "– Boys"
                : product.subCategory === "Kids Girls"
                ? "– Girls"
                : product.subCategory === "Kids Both" && "– Both")}
          </p>

          <div className="flex justify-between items-start gap-2 w-[100%]">
            <div className="1xl:w-fit xl:w-[72%] md:w-fit sm:w-[88%] xs:w-fit">
              <Link
                to={`/productDetails/${product.id}#productDetails`}
                onClick={() => {
                  scrollToTop();
                }}>
                <Button
                  title="More Details"
                  titleHovering="View More Details"
                  className="ml-[2px] w-[95%]"
                  type="button"
                />
              </Link>
            </div>

            <div className="flex flex-wrap gap-1 justify-between items-center 1xl:w-fit xl:w-[23%] w-fit">
              {product?.availableColors?.map((color, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundColor: color }}
                    className={`w-5 h-5 rounded-full border-[1px] border-[var(--primary-color)]`}></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
