import React from "react";
import "./complexkeys.css";
import keys from "./keysData";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { mathActions } from "../../redux/mathSlice";

const Complexkeys = () => {
  const hardKey = new Audio(require("../../audio/hard-key.wav"));
  const dispatch = useDispatch();
  const value = useSelector((state) => state.math.value);
  // console.log(value);

  const complexKeyHandler = (e) => {
    hardKey.play();
    dispatch(mathActions.updator(e.target.innerHTML));
    // console.log(e.target.innerHTML);
  };

  return (
    <div className="complex-keys-container">
      <div className="complex-keys-row">
        <div onClick={complexKeyHandler} className="complex-key">
          {keys.operators.complex.percent}
        </div>
        <div onClick={complexKeyHandler} className="complex-key">
          CE
        </div>
        <div onClick={complexKeyHandler} className="complex-key">
          C
        </div>
      </div>
      <div className="complex-keys-row">
        <div onClick={complexKeyHandler} className="complex-key">
          {keys.operators.complex.inverse}
        </div>
        <div onClick={complexKeyHandler} className="complex-key">
          {keys.operators.complex.power}
        </div>
        <div onClick={complexKeyHandler} className="complex-key">
          {keys.operators.complex.root}
        </div>
      </div>
    </div>
  );
};

export default Complexkeys;
