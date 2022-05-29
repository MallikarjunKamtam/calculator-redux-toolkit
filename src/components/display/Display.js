import React from "react";
import "./display.css";
import { useSelector } from "react-redux";

const Display = () => {
  const { value } = useSelector((state) => state.math);
  const history = useSelector((state) => state.math.history);

  return (
    <div className="display-container">
      <p className="display-history">{history}</p>
      <div className="display">
        {Number(value) % 1 === 0 ? value : Number(value).toFixed(7)}
      </div>
    </div>
  );
};

export default Display;
