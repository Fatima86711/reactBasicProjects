import React, { useState } from "react";

const Counter = () => {
  const [count, counter] = useState(0);
  return (
    <div className="counter-container">
      <p className="discription">You have clicked {count} times</p>
      <button
        id="btn"
        onClick={() => {
          counter(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Counter;
