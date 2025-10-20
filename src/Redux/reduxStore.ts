import { configureStore } from "@reduxjs/toolkit";
import productsCartReducer from "./productDetailsSlice";
import wishlistSlice from "./wishlistSlice";
import footerSlice from "./footerSlice";
import checkoutSlice from "./checkoutSlice";
import cartSlice from "./cartSlice";
import signupSlice from "./signupSlice";
import searchSlice from "./searchSlice";

export const reduxStore = configureStore({
  reducer: {
    productsCartSlice: productsCartReducer,
    wishlistSlice: wishlistSlice,
    footerSlice: footerSlice,
    checkoutSlice: checkoutSlice,
    cartSlice: cartSlice,
    signupSlice: signupSlice,
    searchSlice: searchSlice
  }
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
