import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fromValue: 0,
  toValue: 0,
  fromType: "days",
  toType: "weeks",
};

const microseconds = (to, value) => {
  if (to === "milliseconds") return value / 1000;
  if (to === "microseconds") return value;
  if (to === "seconds") return value / 1000 / 1000;
  if (to === "minutes") return value / 1000 / 1000 / 60;
  if (to === "hours") return value / 1000 / 1000 / 60 / 60;
  if (to === "days") return value / 1000 / 1000 / 60 / 60 / 24;
  if (to === "weeks") return value / 1000 / 1000 / 60 / 60 / 24 / 7;
  if (to === "months") return value / 1000 / 1000 / 60 / 60 / 24 / 30;
  if (to === "years") return value / 1000 / 1000 / 60 / 60 / 24 / 30 / 365;
  return "";
};

const milliseconds = (to, value) => {
  if (to === "microseconds") return value * 1000;
  if (to === "milliseconds") return value;
  if (to === "seconds") return value / 1000;
  if (to === "minutes") return value / 1000 / 60;
  if (to === "hours") return value / 1000 / 60 / 60;
  if (to === "days") return value / 1000 / 60 / 60 / 24;
  if (to === "weeks") return value / 1000 / 60 / 60 / 24 / 7;
  if (to === "months") return value / 1000 / 60 / 60 / 24 / 30;
  if (to === "years") return value / 1000 / 60 / 60 / 24 / 30 / 365;
  return "";
};

const seconds = (to, value) => {
  if (to === "milliseconds") return value * 1000;
  if (to === "microseconds") return value * 1000 * 1000;
  if (to === "seconds") return value;
  if (to === "minutes") return value / 60;
  if (to === "hours") return value / 60 / 60;
  if (to === "days") return value / 60 / 60 / 24;
  if (to === "weeks") return value / 60 / 60 / 24 / 7;
  if (to === "months") return value / 60 / 60 / 24 / 30;
  if (to === "years") return value / 60 / 60 / 24 / 30 / 365;
  return "";
};

const minutes = (to, value) => {
  if (to === "milliseconds") return value * 1000 * 60;
  if (to === "microseconds") return value * 1000 * 1000 * 60;
  if (to === "seconds") return value * 60;
  if (to === "minutes") return value;
  if (to === "hours") return value / 60;
  if (to === "days") return value / 60 / 24;
  if (to === "weeks") return value / 60 / 24 / 7;
  if (to === "months") return value / 60 / 24 / 30;
  if (to === "years") return value / 60 / 24 / 30 / 365;
  return "";
};

const hours = (to, value) => {
  if (to === "milliseconds") return value * 1000 * 60 * 60;
  if (to === "microseconds") return value * 1000 * 1000 * 60 * 60;
  if (to === "seconds") return value * 60 * 60;
  if (to === "minutes") return value * 60;
  if (to === "hours") return value;
  if (to === "days") return value / 24;
  if (to === "weeks") return value / 24 / 7;
  if (to === "months") return value / 24 / 30;
  if (to === "years") return value / 24 / 30 / 365;
  return "";
};

const days = (to, value) => {
  if (to === "milliseconds") return value * 1000 * 60 * 60 * 24;
  if (to === "microseconds") return value * 1000 * 1000 * 60 * 60 * 24;
  if (to === "seconds") return value * 60 * 60 * 24;
  if (to === "minutes") return value * 60 * 24;
  if (to === "hours") return value * 24;
  if (to === "days") return value;
  if (to === "weeks") return value / 7;
  if (to === "months") return value / 30;
  if (to === "years") return value / 30 / 365;
  return "";
};

const weeks = (to, value) => {
  if (to === "milliseconds") return value * 1000 * 60 * 60 * 24 * 7;
  if (to === "microseconds") return value * 1000 * 1000 * 60 * 60 * 24 * 7;
  if (to === "seconds") return value * 60 * 60 * 24 * 7;
  if (to === "minutes") return value * 60 * 24 * 7;
  if (to === "hours") return value * 24 * 7;
  if (to === "days") return value * 7;
  if (to === "weeks") return value;
  if (to === "months") return value / 4.345;
  if (to === "years") return value / 52.178571;
  return "";
};

const months = (to, value) => {
  if (to === "milliseconds") return value * 1000 * 60 * 60 * 24 * 7 * 4.345;
  if (to === "microseconds")
    return value * 1000 * 1000 * 60 * 60 * 24 * 7 * 4.345;
  if (to === "seconds") return value * 60 * 60 * 24 * 7 * 4.345;
  if (to === "minutes") return value * 60 * 24 * 7 * 4.345;
  if (to === "hours") return value * 24 * 7 * 4.345;
  if (to === "days") return value * 7 * 4.345;
  if (to === "weeks") return value * 4.345;
  if (to === "months") return value;
  if (to === "years") return value / 12;
  return "";
};

const years = (to, value) => {
  if (to === "milliseconds") return value * 1000 * 60 * 60 * 24 * 365.25;
  if (to === "microseconds") return value * 1000 * 1000 * 60 * 60 * 24 * 365.25;
  if (to === "seconds") return value * 60 * 60 * 24 * 365.25;
  if (to === "minutes") return value * 60 * 24 * 365.25;
  if (to === "hours") return value * 24 * 365.25;
  if (to === "days") return value * 365.25;
  if (to === "weeks") return value * 52.178571;
  if (to === "months") return value * 12;
  if (to === "years") return value;
  return "";
};
const timeConversionSlice = createSlice({
  name: "timeconversion",
  initialState,

  reducers: {
    fromDispatchValue(state, actions) {
      state.fromValue = actions.payload;
      if (state.fromType === "microseconds") {
        state.toValue = microseconds(state.toType, state.fromValue);
      }
      if (state.fromType === "milliseconds") {
        state.toValue = milliseconds(state.toType, state.fromValue);
      }
      if (state.fromType === "seconds") {
        state.toValue = seconds(state.toType, state.fromValue);
      }
      if (state.fromType === "minutes") {
        state.toValue = minutes(state.toType, state.fromValue);
      }
      if (state.fromType === "hours") {
        state.toValue = hours(state.toType, state.fromValue);
      }
      if (state.fromType === "days") {
        state.toValue = days(state.toType, state.fromValue);
      }
      if (state.fromType === "weeks") {
        state.toValue = weeks(state.toType, state.fromValue);
      }
      if (state.fromType === "months") {
        state.toValue = months(state.toType, state.fromValue);
      }
      if (state.fromType === "years") {
        state.toValue = years(state.toType, state.fromValue);
      }
    },

    fromType(state, actions) {
      state.fromType = actions.payload;
      if (state.fromType === "microseconds") {
        state.toValue = microseconds(state.toType, state.fromValue);
      }
      if (state.fromType === "milliseconds") {
        state.toValue = milliseconds(state.toType, state.fromValue);
      }
      if (state.fromType === "seconds") {
        state.toValue = seconds(state.toType, state.fromValue);
      }
      if (state.fromType === "minutes") {
        state.toValue = minutes(state.toType, state.fromValue);
      }
      if (state.fromType === "hours") {
        state.toValue = hours(state.toType, state.fromValue);
      }
      if (state.fromType === "days") {
        state.toValue = days(state.toType, state.fromValue);
      }
      if (state.fromType === "weeks") {
        state.toValue = weeks(state.toType, state.fromValue);
      }
      if (state.fromType === "months") {
        state.toValue = months(state.toType, state.fromValue);
      }
      if (state.fromType === "years") {
        state.toValue = years(state.toType, state.fromValue);
      }
    },

    toType(state, actions) {
      state.toType = actions.payload;
      if (state.fromType === "microseconds") {
        state.toValue = microseconds(state.toType, state.fromValue);
      }
      if (state.fromType === "milliseconds") {
        state.toValue = milliseconds(state.toType, state.fromValue);
      }
      if (state.fromType === "seconds") {
        state.toValue = seconds(state.toType, state.fromValue);
      }
      if (state.fromType === "minutes") {
        state.toValue = minutes(state.toType, state.fromValue);
      }
      if (state.fromType === "hours") {
        state.toValue = hours(state.toType, state.fromValue);
      }
      if (state.fromType === "days") {
        state.toValue = days(state.toType, state.fromValue);
      }
      if (state.fromType === "weeks") {
        state.toValue = weeks(state.toType, state.fromValue);
      }
      if (state.fromType === "months") {
        state.toValue = months(state.toType, state.fromValue);
      }
      if (state.fromType === "years") {
        state.toValue = years(state.toType, state.fromValue);
      }
    },

    clearAll() {
      window.location.reload();
    },
  },
});

export const timeConversionActions = timeConversionSlice.actions;
export default timeConversionSlice;
