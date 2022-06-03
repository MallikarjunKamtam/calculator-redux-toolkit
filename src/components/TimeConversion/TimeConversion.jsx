import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./TimeConversion.css";
import keysData from "../keys/keysData";
import { timeConversionActions } from "../../redux/timeConversionSlice";

function TimeConversion() {
  const dispatch = useDispatch();

  const { toValue, fromValue } = useSelector((state) => state.timeconversion);

  const clearAll = () => {
    dispatch(timeConversionActions.clearAll());
  };

  const toType = (e) => {
    dispatch(timeConversionActions.toType(e.target.value));
  };

  const fromType = (e) => {
    dispatch(timeConversionActions.fromType(e.target.value));
  };

  const fromValueHandler = (e) => {
    dispatch(timeConversionActions.fromDispatchValue(e.target.value));
  };

  return (
    <div className="time-conversion-body">
      <div className="time-conversion-sub-body">
        <div className="time-conversion-selection">
          <form>
            <select
              onChange={fromType}
              className="tc-dropdown"
              name="time"
              id="time"
            >
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
              <option value="years">Years</option>
              <option value="microseconds">Micro Seconds</option>
              <option value="milliseconds">Milli Seconds</option>
              <option value="seconds">Seconds</option>
              <option value="minutes">Minute</option>
              <option value="hours">Hours</option>
            </select>
          </form>

          <h2>
            <input
              onChange={fromValueHandler}
              placeholder={fromValue}
              className="time-input"
              type="text"
            />
          </h2>
        </div>
        <div className="time-conversion-selection">
          <form>
            <select
              onChange={toType}
              className="tc-dropdown"
              name="time"
              id="time"
            >
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
              <option value="years">Years</option>
              <option value="microseconds">Micro Seconds</option>
              <option value="milliseconds">Milli Seconds</option>
              <option value="seconds">Seconds</option>
              <option value="minutes">Minute</option>
              <option value="hours">Hours</option>
              <option value="days">Days</option>
            </select>
          </form>
          <p className="time-input tc-tovalue">{toValue}</p>
        </div>
      </div>
      <div className="tc-keys">
        <button type="button" onClick={clearAll} className="tc-key">
          <h3> {keysData.operators.other.ce}</h3>
        </button>
      </div>
    </div>
  );
}

export default TimeConversion;
