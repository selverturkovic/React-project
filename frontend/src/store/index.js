// store.js
import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from "../slices/index";
import productReducer from "../slices/product";

const store = configureStore({
  reducer: {
    ecommerce: ecommerceReducer,
    product: productReducer,
  },
});

export default store;
