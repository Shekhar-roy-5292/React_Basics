import axios from "axios";
import React, { useEffect, useState } from "react";

const Store = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((Response) => {
        setProducts(Response.data);
      })
      .catch((error) => {
        console.log("error occur");
      });
  });
  return (
    <div className="container">
      <div className="row">
        {Products.map((product) => (
          <ul key={product.id}>
            <img src={product.image} alt="" srcSet="" />
            <li>{product.title}</li>
            <li>{product.price}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Store;
