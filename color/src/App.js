import React, { useState } from "react";
import "./App.css";

const App = () => {
  const defaultColor = "#ffffff";
  const [bgColor, setBgColor] = useState(defaultColor);

  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bgColor);
    alert(`Copied color: ${bgColor}`);
  };

  const resetColor = () => {
    setBgColor(defaultColor);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <div className="content">
        <h1>Random Background Color</h1>
        <p className="color-display">{bgColor}</p>
        <div className="buttons">
          <button onClick={generateRandomColor}>Change Background</button>
          <button onClick={copyToClipboard}>Copy Color</button>
          <button onClick={resetColor}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
