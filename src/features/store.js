import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./authslice";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
  },
});
