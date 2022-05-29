import React from "react";
import "./numberkey.css";
import keys from "./keysData";
import { useDispatch } from "react-redux";
import { mathActions } from "../../redux/mathSlice";

const Numberkey = () => {
  const hardKey = new Audio(require("../../audio/hard-key.wav"));
  const dispatch = useDispatch();

  const numberKeyHandler = (e) => {
    hardKey.play();
    const current = e.target.innerHTML;
    dispatch(mathActions.updator(current));
  };

  return (
    <div className="numbers-container">
      {keys.numbers.map((key) => (
        <div
          onClick={numberKeyHandler}
          // onMouseEnter={soundHandler}
          key={key}
          className="number-key"
        >
          {key}
        </div>
      ))}
      <div onClick={numberKeyHandler} className="number-key sign">
        {keys.sign}
      </div>
      <div onClick={numberKeyHandler} className="number-key dot">
        {keys.dot}
      </div>
    </div>
  );
};

export default Numberkey;
