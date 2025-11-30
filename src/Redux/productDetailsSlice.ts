import { createSlice } from "@reduxjs/toolkit";

interface productCartItemProps {
  id: number;
  idImg: number;
  sizeID: number;
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

interface removeProductFromCartProps {
  id: number;
  color: string;
  size?: string;
  width?: number;
  height?: number;
}

interface selectedQuantityProps {
  productId: number;
  imageId: number;
  quantity: number;
  color: string;
  height: number;
  width: number;
  size: string;
}

const productsCartSlice = createSlice({
  name: "productsCartSlice",

  initialState: {
    productsCart: [] as productCartItemProps[],
    productsCartLengthState: 0,
    isProductAdded: false,
    isSize_QuantityAdded: false,
    selectedQuantity: [] as selectedQuantityProps[],
    totalPrice: 0
  },

  reducers: {
    addProductToCart: (state, action: { payload: productCartItemProps }) => {
      const { id, idImg, color, size, quantity, width, height } =
        action.payload;
      const existingProduct = state.productsCart.find(
        (product) =>
          product.id === id &&
          product.idImg === idImg &&
          product.height === height &&
          product.width === width &&
          product.size === size
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
        // existingProduct.size = size;
        // existingProduct.height = height;
        // existingProduct.width = width;
      } else {
        state.productsCart.push(action.payload);
      }

      const detectProductAdded = state.productsCart.some(
        (product) =>
          product.id === id &&
          product.color === color &&
          product.idImg === idImg &&
          product.size === size &&
          product.width === width &&
          product.height === height
      );

      if (detectProductAdded) {
        state.isProductAdded = true;
      } else {
        state.isProductAdded = false;
      }

      sessionStorage.setItem(
        "productsCart",
        JSON.stringify(state.productsCart)
      );
    },

    updateIsSize_QuantityAdded: (state) => {
      state.isSize_QuantityAdded = !state.isSize_QuantityAdded;
    },

    updateQuantity: (state, action: { payload: selectedQuantityProps }) => {
      const { productId, quantity, color, height, width, size, imageId } =
        action.payload;
      const productIsFounded = state.productsCart.find(
        (product) =>
          product.id === productId &&
          product.color === color &&
          product?.idImg === imageId &&
          product?.size === size &&
          product?.width === width &&
          product?.height === height
      );

      if (productIsFounded) {
        productIsFounded.quantity = quantity;
      }
    },

    pushTotalPrice: (state, action: { payload: number }) => {
      state.totalPrice = action.payload;
    },

    clearCartAfterPayment: (state) => {
      state.productsCart = [];
      state.productsCartLengthState = 0;

      sessionStorage.removeItem("productsCart");
    },

    removeProductFromCart: (
      state,
      action: { payload: removeProductFromCartProps }
    ) => {
      const { id, color, size, width, height } = action.payload;
      state.productsCart = state.productsCart.filter(
        (product) =>
          !(
            product.id === id &&
            product.color === color &&
            product.size === size &&
            product.width === width &&
            product.height === height
          )
      );

      state.isProductAdded = false;

      sessionStorage.setItem(
        "productsCart",
        JSON.stringify(state.productsCart)
      );
    },

    productsCartLength: (state) => {
      state.productsCartLengthState = state.productsCart.length;
    },

    reduceNumberOfProductsLength: (state) => {
      state.productsCartLengthState = state.productsCart.length - 1;

      if (state.productsCartLengthState < 0) {
        state.productsCartLengthState = 0;
      }
    },

    clearProductsCartLength: (state) => {
      state.productsCartLengthState = 0;
    },

    clearCart: (state) => {
      state.productsCart = [];
      sessionStorage.removeItem("productsCart");
    },

    restoreCartFromStorage: (state) => {
      const savedCart = sessionStorage.getItem("productsCart");
      if (savedCart) {
        state.productsCart = JSON.parse(savedCart);
      }
    }
  }
});

export const {
  addProductToCart,
  clearCart,
  productsCartLength,
  reduceNumberOfProductsLength,
  clearProductsCartLength,
  removeProductFromCart,
  restoreCartFromStorage,
  clearCartAfterPayment,
  updateQuantity,
  updateIsSize_QuantityAdded,
  pushTotalPrice
} = productsCartSlice.actions;

export default productsCartSlice.reducer;
