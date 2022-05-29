import React from "react";
import "./operatorkey.css";
import keys from "./keysData";
import { useDispatch } from "react-redux";
import { mathActions } from "../../redux/mathSlice";
const Operatorkey = () => {
  const hardKey = new Audio(require("../../audio/hard-key.wav"));
  const dispatch = useDispatch();

  const opKeyHandler = (e) => {
    hardKey.play();
    const current = e.target.innerHTML;
    dispatch(mathActions.updator(current));
  };

  return (
    <div>
      <div onClick={opKeyHandler} className="op-key arrow">
        ←
      </div>
      <div onClick={opKeyHandler} className="op-key">
        {keys.operators.basic.devide}
      </div>
      <div onClick={opKeyHandler} className="op-key">
        {keys.operators.basic.mul}
      </div>
      <div onClick={opKeyHandler} className="op-key">
        {keys.operators.basic.minus}
      </div>
      <div onClick={opKeyHandler} className="op-key">
        {keys.operators.basic.plus}
      </div>
      <div onClick={opKeyHandler} className="op-key">
        {keys.operators.basic.equal}
      </div>
    </div>
  );
};

export default Operatorkey;
