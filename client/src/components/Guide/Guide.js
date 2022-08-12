import React from "react";
import "./Guide.css";
const Guide = ({ style, text }) => {
  return (
    <div
      className="guide"
      style={{ top: `${style.top}px`, left: `${style.left}px` }}
    >
      <div className="guideText">{text}</div>
    </div>
  );
};

export default Guide;
