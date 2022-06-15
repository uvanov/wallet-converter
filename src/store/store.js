import { configureStore } from "@reduxjs/toolkit";

// Import slices
import walletSlice from "./slices/walletSlice";

// Init store
export const store = configureStore({
  reducer: {
    wallet: walletSlice
  }
});