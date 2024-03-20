import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" flex justify-between bg-black text-white">
      <Link to="/">Home</Link>
      <Link to="/Store">Store</Link>
      <Link to="/MyData">my data</Link>
    </div>
  );
};

export default Navbar;
