import React from "react";
import "./operatorkey.css";
import { useDispatch } from "react-redux";
import keys from "./keysData";
import { mathActions } from "../../redux/mathSlice";

function Operatorkey() {
  // eslint-disable-next-line global-require
  const hardKey = new Audio(require("../../audio/hard-key.wav"));
  const dispatch = useDispatch();

  const opKeyHandler = (e) => {
    hardKey.play();
    const current = e.target.innerHTML;
    dispatch(mathActions.updator(current));
  };

  return (
    <div>
      <div aria-hidden="true" onClick={opKeyHandler} className="op-key arrow">
        ←
      </div>
      <div aria-hidden="true" onClick={opKeyHandler} className="op-key">
        {keys.operators.basic.devide}
      </div>
      <div aria-hidden="true" onClick={opKeyHandler} className="op-key">
        {keys.operators.basic.mul}
      </div>
      <div aria-hidden="true" onClick={opKeyHandler} className="op-key">
        {keys.operators.basic.minus}
      </div>
      <div aria-hidden="true" onClick={opKeyHandler} className="op-key">
        {keys.operators.basic.plus}
      </div>
      <div aria-hidden="true" onClick={opKeyHandler} className="op-key">
        {keys.operators.basic.equal}
      </div>
    </div>
  );
}

export default Operatorkey;
