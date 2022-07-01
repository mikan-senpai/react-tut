import React, { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setValue(value - 1);
        }}
      >
        -
      </button>
      <span>{value}</span>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default App;
