import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    document.title = `you have clicked ${count} times`;
  });

  const incrementCount = () =>
    setCount((prevCount) => {
      return prevCount + 1;
    });
  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}>I was clicked {count} times.</button>;
      <h2>Toggle Light</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{
          height: "5rem",
          width: "5rem",
          fill: isOn ? "yellow" : "grey",
        }}
        onClick={() => toggleLight()}
        alt="lightbulb"
      >
        <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
      </svg>
    </>
  );
};

export default App;
