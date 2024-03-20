import { combineReducers } from "@reduxjs/toolkit";
import CounterReducer from "../slices/CounterSlice";
const RootReducer = combineReducers({
  counter: CounterReducer,
});
export default RootReducer;
