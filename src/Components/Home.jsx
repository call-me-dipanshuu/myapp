import React, { useEffect } from "react";
import { useState } from "react";

// const Home = () => {
//   return (
//     <div>
//       <input
//         style={{ padding: 20, border: "1px solid rgba(0,0,0,0.4)" }}
//         type="text"
//         placeholder="Enter Something"
//         onChange={(e) => {
//           inputValue = e.target.value;
//         }}
//       />
//     </div>
//   );
// };
const Home = () => {
  const [inputValue, setInputValue] = useState(0);
  const increment = () => {
    setInputValue(inputValue + 1);
  };
  const decrement = () => {
    setInputValue(inputValue - 1);
  };
  const changeHandler = (e) => {
    inputValue = e.target.value;
    console.log(inputValue);
  };
  const btnStyle = {
    padding: 15,
    border: "none",
    backgroundColor: "#f1f1f1",
    margin: 10,
  };
  useEffect(() => {
    console.log("Run");
  }, []);
  return (
    <div>
      <input
        style={{ padding: 20, border: "1px solid rgba(0,0,0,0.4)" }}
        type="text"
        placeholder="Enter Something"
        onChange={changeHandler}
        value={inputValue}
        readOnly
      />
      <button style={btnStyle} onClick={decrement}>
        -
      </button>
      <button style={btnStyle} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Home;
