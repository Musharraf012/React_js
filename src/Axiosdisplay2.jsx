import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Axiosdisplay2() {
  let [products, setproducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((y) => setproducts(y.data));
  }, []);

  return (
    <div>
      {products
        .filter((v) => v.category.includes("men"))
        .map((v) => {
          return <div>{v.category}</div>;
        })}
    </div>
  );
}
