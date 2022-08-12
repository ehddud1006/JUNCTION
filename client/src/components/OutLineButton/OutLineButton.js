import React from "react";
import "./OutLineButton.css";
const OutLineButton = ({ style, disabled }) => {
  if (disabled) {
    return (
      <button
        disabled
        className="outLineButton"
        style={{ top: `${style.top}px`, left: `${style.left}px` }}
      >
        <div className="outLineButtonText">Start</div>
      </button>
    );
  }
  return (
    <button
      className="outLineButton"
      style={{ top: `${style.top}px`, left: `${style.left}px` }}
    >
      <div className="outLineButtonText">Start</div>
    </button>
  );
};

export default OutLineButton;
