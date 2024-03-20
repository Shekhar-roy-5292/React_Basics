import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slices/CounterSlice";
const Home = () => {
  // const { value, status } = useSelector((state) => state.counter); // Access value and status
  // const count = useSelector((state) => state.counter.value);
  const count = useSelector((state) => state.counter);   //you're directly accessing the counter state from the Redux store. This assumes that the state managed by your counterSlice reducer is a single value, like a number or a string.
  const dispatch = useDispatch();
  return (
    <div className="container">
     <div className=" mt-80 card">
     <h1 className=" text-center card-header counter">Counter : {count}</h1>
     <div className=" d-flex justify-around card-body">
     <button className=" btn btn-outline-primary link-underline-opacity-50-hover   increase"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button className="btn btn-outline-secondary link-underline-opacity-50-hover decrease"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
     </div>
     </div>

    </div>
  );
};

export default Home;
