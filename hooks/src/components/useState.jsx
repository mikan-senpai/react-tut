import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(() => {
    console.log("run function");
    return 4;
  });

  const [theme, setTheme] = useState("yellow");
  //using object in state
  const [state, setState] = useState({
    id: 131,
    name: "mikan",
    color: "black",
  });
  const name = state.name;
  const id = state.id;
  const color = state.color;

  const decrementCount = () => {
    setCount((preCount) => preCount - 1);

    //if you do use an object inside of you state when you update the object you need to make sure you update with all the old values as well becuse they dont get merged together automatically
    setState((preState) => {
      return { ...preState, color: "blue" };
    });
  };

  const incrementCount = () => {
    setCount((preCount) => preCount + 1);
  };
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{name}</span>
      <span>{id}</span>
      <span>{color}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default UseState;
