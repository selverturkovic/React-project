// store.js
import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from "../slices/index";

const store = configureStore({
  reducer: {
    ecommerce: ecommerceReducer,
  },
});

export default store;
