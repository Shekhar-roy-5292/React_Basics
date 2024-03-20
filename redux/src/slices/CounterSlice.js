import { createSlice } from "@reduxjs/toolkit";
const initialState =  0;
// const initialState = {                // If there are multiple state values managed by a single slice, you would need to access them accordingly within the selector function.
//   value: 0,
//   status: 'idle',
// };
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment : (state) => {
    //   state.value = state.value + 1   //In this approach, we are directly mutating the state object by incrementing its value property.
      return state = state + 1           //In this approach, we are returning a new value (state + 1) instead of modifying the original state
    },
    decrement : (state) => {
    //   state.value = state.value - 1
      return state = state - 1
    },
    incrementByAmount(state, action) {
      state = state + action.payload
    },
  },
});
export const { increment, decrement, incrementByAmount } = CounterSlice.actions
export default CounterSlice.reducer
