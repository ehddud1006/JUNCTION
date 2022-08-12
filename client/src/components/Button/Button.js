import React from "react";
import "./Button.css";
const Button = ({ style, disabled }) => {
  if (disabled) {
    return (
      <button
        disabled
        className="button"
        style={{ top: `${style.top}px`, left: `${style.left}px` }}
      >
        <div className="buttonText">Start</div>
      </button>
    );
  } else {
    return (
      <button
        className="button"
        style={{ top: `${style.top}px`, left: `${style.left}px` }}
      >
        <div className="buttonText">Start</div>
      </button>
    );
  }
};

export default Button;
