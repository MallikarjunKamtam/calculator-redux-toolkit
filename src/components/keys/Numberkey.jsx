import React from "react";
import "./numberkey.css";
import { useDispatch } from "react-redux";
import keys from "./keysData";
import { mathActions } from "../../redux/mathSlice";

function Numberkey() {
  // eslint-disable-next-line global-require
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
          aria-hidden="true"
          onClick={numberKeyHandler}
          // onMouseEnter={soundHandler}
          key={key}
          className="number-key"
        >
          {key}
        </div>
      ))}
      <div
        aria-hidden="true"
        onClick={numberKeyHandler}
        className="number-key sign"
      >
        {keys.sign}
      </div>
      <div
        aria-hidden="true"
        onClick={numberKeyHandler}
        className="number-key dot"
      >
        {keys.dot}
      </div>
    </div>
  );
}

export default Numberkey;
