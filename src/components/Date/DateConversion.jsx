import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./DateConversion.css";

import moment from "moment";
import { dateActions } from "../../redux/dateSlice";

function DateConversion() {
  const [fromDate, setFromDate] = useState(new Date().toDateString());
  const [toDate, setToDate] = useState(new Date().toDateString());

  const dispatch = useDispatch();
  const diff = useSelector((state) => state.date.value);

  const fromdateHandler = (e) => {
    dispatch(dateActions.dateDifferance([e.target.value, "from"]));
    setFromDate(moment(e.target.value).format("YYYY-MM-DD"));
  };
  const todateHandler = (e) => {
    dispatch(dateActions.dateDifferance([e.target.value, "to"]));
    setToDate(e.target.value);
  };

  return (
    <div>
      <div className="date-body">
        <div>
          <h2 className="diff-head">Difference between the dates</h2>
        </div>
        <div className="from-date-input">
          <input
            onChange={fromdateHandler}
            className="from-date"
            value={moment(fromDate).format("YYYY-MM-DD")}
            type="date"
          />
          <h3>{moment(fromDate).toLocaleString()}</h3>
        </div>
        <div className="to-date-input">
          <input
            onChange={todateHandler}
            className="to-date"
            value={moment(toDate).format("YYYY-MM-DD")}
            type="date"
          />
          <h3>{moment(toDate).toLocaleString("en-IN")}</h3>
        </div>
        <div className="result-diff">
          {+Math.floor(diff) === 1 ? (
            <h3>{Math.floor(diff)} Day</h3>
          ) : (
            <h3>{Math.floor(diff)} Days</h3>
          )}
          {Math.floor(+diff / 7) === 1 ? (
            <h3>{(+diff / 7).toFixed(3)} Week</h3>
          ) : (
            <h3>{(+diff / 7).toFixed(3)} Weeks</h3>
          )}
          {Math.floor(+diff / 30) === 1 ? (
            <h3>{(+diff / 30).toFixed(3)} Month</h3>
          ) : (
            <h3>{(+diff / 30).toFixed(3)} Months</h3>
          )}
          {Math.floor(+diff / 365) === 1 ? (
            <h3>{(+diff / 365).toFixed(3)} Year</h3>
          ) : (
            <h3>{(+diff / 365).toFixed(3)} Years</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default DateConversion;
