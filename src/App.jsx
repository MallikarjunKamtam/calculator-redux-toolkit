import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import TotalBody from "./components/keys/TotalBody";
import Scientific from "./components/Scientific/Scientific";
import Angle from "./components/Angle/Angle";
import Currency from "./components/Currency/Currency";
import DataConversion from "./components/DataConversion/DataConversion";
import DateConversion from "./components/Date/DateConversion";
import Energy from "./components/Energy/Energy";
import Power from "./components/Power/Power";
import Pressure from "./components/Pressure/Pressure";
import Speed from "./components/Speed/Speed";
import TimeConversion from "./components/TimeConversion/TimeConversion";
import Temperature from "./components/Temperature/Temperature";
import Volume from "./components/Volume/Volume";
import Weight from "./components/Weight/Weight";
import Length from "./components/Length/Length";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate replace to="./standerd/" />} />
        <Route path="/" exact element={<Navigate replace to="./standerd/" />} />
        <Route path="*" element={<TotalBody />} />
        <Route path="/standerd" element={<TotalBody />} />
        <Route path="/scientific" element={<Scientific />} />
        <Route path="/angle" element={<Angle />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/data" element={<DataConversion />} />
        <Route path="/dateconversion" element={<DateConversion />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/power" element={<Power />} />
        <Route path="/pressure" element={<Pressure />} />
        <Route path="/speed" element={<Speed />} />
        <Route path="/volume" element={<Volume />} />
        <Route path="/weight" element={<Weight />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/timeconversion/" element={<TimeConversion />} />
        <Route path="/length" element={<Length />} />
      </Routes>
    </div>
  );
}

export default App;
