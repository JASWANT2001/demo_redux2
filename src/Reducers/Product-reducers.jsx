import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setproducts: (state, action) => {
      state.products = action.payload;
      return state;
    },
  },
});
export const {setproducts} = productSlice.actions