import React from "react";
import "./complexkeys.css";
import { useDispatch } from "react-redux";

import keys from "./keysData";
import { mathActions } from "../../redux/mathSlice";

function Complexkeys() {
  // eslint-disable-next-line global-require
  const hardKey = new Audio(require("../../audio/hard-key.wav"));
  const dispatch = useDispatch();

  const complexKeyHandler = (e) => {
    hardKey.play();
    dispatch(mathActions.updator(e.target.innerHTML));
  };

  return (
    <div className="complex-keys-container">
      <div className="complex-keys-row">
        <div
          aria-hidden="true"
          onClick={complexKeyHandler}
          className="complex-key"
        >
          {keys.operators.complex.percent}
        </div>
        <div
          aria-hidden="true"
          onClick={complexKeyHandler}
          className="complex-key"
        >
          CE
        </div>
        <div
          aria-hidden="true"
          onClick={complexKeyHandler}
          className="complex-key"
        >
          C
        </div>
      </div>
      <div className="complex-keys-row">
        <div
          aria-hidden="true"
          onClick={complexKeyHandler}
          className="complex-key"
        >
          {keys.operators.complex.inverse}
        </div>
        <div
          aria-hidden="true"
          onClick={complexKeyHandler}
          className="complex-key"
        >
          {keys.operators.complex.power}
        </div>
        <div
          aria-hidden="true"
          onClick={complexKeyHandler}
          className="complex-key"
        >
          {keys.operators.complex.root}
        </div>
      </div>
    </div>
  );
}

export default Complexkeys;
