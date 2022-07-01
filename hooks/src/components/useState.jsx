import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(() => {
    console.log("run function");
    return 4;
  });

  const decrementCount = () => {
    setCount((preCount) => preCount - 1);
  };

  const incrementCount = () => {
    setCount((preCount) => preCount + 1);
  };
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default UseState;
