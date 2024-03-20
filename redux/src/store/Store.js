import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../slices/RootReducer";
const store = configureStore({
  reducer: RootReducer,
});

export default store;
