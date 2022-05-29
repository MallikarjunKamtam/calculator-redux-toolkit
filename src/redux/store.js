import { configureStore } from "@reduxjs/toolkit";
import mathSlice from "./mathSlice";
import timeSlice from "./timeSlice";
import dateSlice from "./dateSlice";
import timeConversionSlice from "./timeConversionSlice";

const store = configureStore({
  reducer: {
    math: mathSlice.reducer,
    time: timeSlice.reducer,
    date: dateSlice.reducer,
    timeconversion: timeConversionSlice.reducer,
  },
});

export default store;
