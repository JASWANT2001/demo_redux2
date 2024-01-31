import { productSlice } from "./Reducers/Product-reducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    app: productSlice.reducer,
  },
});
