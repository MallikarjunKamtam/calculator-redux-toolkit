import "./App.css";
import Header from "./components/header/Header";
import TotalBody from "./components/keys/TotalBody";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Scientific from "./components/Scientific/Scientific";
import Angle from "./components/Angle/Angle";
import Currency from "./components/Currency/Currency";
import DataConversion from "./components/DataConversion/DataConversion";
import DateConversion from "./components/Date/DateConversion";
import Energy from "./components/Energy/Energy";
import Power from "./components/Power/Power";
import Pressure from "./components/Pressure/Pressure";
import Speed from "./components/Speed/Speed";
import Time from "./components/Time/Time";
import Temperature from "./components/Temperature/Temperature";
import TimeConversion from "./components/TimeConversion/TimeConversion";
import Volume from "./components/Volume/Volume";
import Weight from "./components/Weight/Weight";
import Length from "./components/Length/Length";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="*" element={<Navigate replace to="./standerd/" />}></Route>
        <Route
          path="/"
          exact
          element={<Navigate replace to="./standerd/" />}
        ></Route>

        <Route path="*" element={<TotalBody />}></Route>
        <Route path="/standerd" element={<TotalBody />}></Route>
        <Route path="/scientific" element={<Scientific />}></Route>
        <Route path="/angle" element={<Angle />}></Route>
        <Route path="/currency" element={<Currency />}></Route>
        <Route path="/data" element={<DataConversion />}></Route>
        <Route path="/dateconversion" element={<DateConversion />}></Route>
        <Route path="/energy" element={<Energy />}></Route>
        <Route path="/power" element={<Power />}></Route>
        <Route path="/time" element={<Time />}></Route>
        <Route path="/pressure" element={<Pressure />}></Route>
        <Route path="/speed" element={<Speed />}></Route>
        <Route path="/volume" element={<Volume />}></Route>
        <Route path="/weight" element={<Weight />}></Route>
        <Route path="/temperature" element={<Temperature />}></Route>
        <Route path="/timeconversion" element={<TimeConversion />}></Route>
        <Route path="/length" element={<Length />}></Route>
      </Routes>
    </div>
  );
}

export default App;
