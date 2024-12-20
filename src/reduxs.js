import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./reduxreducer"; // Make sure it's the default export from reduxreducer

export const Store = configureStore({
  reducer: {
    cart: CartReducer, // Ensure 'cart' matches the slice name and you are passing the reducer correctly
  },
});
