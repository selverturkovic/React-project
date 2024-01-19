// store.js
import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from "../slices/index";
import productReducer from "../slices/product";
import searchReducer from "../slices/search";

const store = configureStore({
  reducer: {
    ecommerce: ecommerceReducer,
    product: productReducer,
    search: searchReducer,
  },
});

export default store;
