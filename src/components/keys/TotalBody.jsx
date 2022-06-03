import React from "react";
import "./totalbody.css";
import Display from "../display/Display";
import Keyboard from "./Keyboard";

function TotalBody() {
  return (
    <div className="total-body-container">
      <div className="total-body">
        <Display />
        <Keyboard />
      </div>
    </div>
  );
}

export default TotalBody;
