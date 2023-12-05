// gallerySlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    addImage: (state, action) => {
      state.images.push(action.payload);
    },
    clearGallery: (state) => {
      state.images = [];
    },
  },
});

export const { addImage, clearGallery } = gallerySlice.actions;
export const selectImages = (state) => state.gallery.images;

export default gallerySlice.reducer;
