import React from "react";
import "./keyboard.css";
import Numberkey from "./Numberkey";
import Operatorkey from "./Operatorkey";
import Memorykeys from "./Memorykeys";
import Complexkeys from "./Complexkeys";

const Keyboard = () => {
  return (
    <div>
      <Memorykeys />
      <div className="over-all-keyboard">
        <div>
          <Complexkeys />
          <Numberkey />
        </div>
        <div>
          <Operatorkey />
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
