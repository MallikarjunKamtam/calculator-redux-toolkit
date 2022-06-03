import React, { useEffect, useState } from "react";
import "./Currency.css";
import axios from "axios";

function Currency() {
  const [data, setData] = useState({});
  const [fetchAPI, setFetchAPI] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputData = {
    from: "CAD",
    to: "INR",
    amount: "1",
  };

  const dataHandler = (e) => {
    inputData[e.target.name] =
      e.target.value % 1 === 0
        ? Number(e.target.value)
        : e.target.value.toUpperCase();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFetchAPI(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `https://api.exchangerate.host/convert?from=${inputData.from}&to=${inputData.to}`
        )
        .then((result) => setData(result.data))
        .then(setLoading(true));
    };

    if (fetchAPI) {
      fetchData();
    }
  }, [inputData.from, inputData.to, fetchAPI]);

  return (
    <div className="c-body">
      <form className="c-form">
        <div className="c-input">
          <div className="c-input-div">
            <label htmlFor="from">
              <h3>From:</h3>
              <input
                id="from"
                onChange={dataHandler}
                className="c-input-element"
                name="from"
                placeholder="EUR"
                type="text"
              />
            </label>
          </div>
          <div className="c-input-div">
            <label htmlFor="to">
              <h3>To:</h3>
              <input
                onChange={dataHandler}
                name="to"
                className="c-input-element"
                placeholder="INR"
                type="text"
              />
            </label>
          </div>
          <div className="c-input-div">
            <label htmlFor="amount">
              <h3>Amount:</h3>
              <input
                onChange={dataHandler}
                name="amount"
                className="c-input-element"
                placeholder="0"
                type="number"
              />
            </label>
          </div>
        </div>
        <button type="button" onClick={submitHandler} className="c-submit">
          Submit
        </button>
      </form>

      {loading && (
        <div className="c-results">
          <div className="c-current-results">
            <h3>{`From: ${data?.query?.amount} ${data?.query?.from}`}</h3>
            <h3>{`To: ${data?.result} ${data?.query?.to}`}</h3>
            <h3>
              Rate
              {data?.info?.rate}
            </h3>
          </div>
          <div className="c-other-results" />
        </div>
      )}
    </div>
  );
}

export default Currency;
