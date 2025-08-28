import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Store/Slice/UserSlice";
import categorySlice from "../Store/Slice/CategorySlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
  },
});

export default store;
