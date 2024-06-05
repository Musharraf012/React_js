import React, { useState } from "react";

export default function Counter() {
  let [a, setCounter] = useState(0); //initialize a (means firstly a = 0;)
  let inc = () => {
    setCounter(a + 1);
  };
  let dec = () => {
    setCounter(a - 1);
  };
  return (
    <div>
      {a}
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}
