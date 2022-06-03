import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  history: [],
  currentValue: "",
  previousValue: "",
};

const mathSlice = createSlice({
  name: "math",
  initialState,
  reducers: {
    updator(state, actions) {
      const { payload } = actions;

      function add(a, b) {
        return Number(a) + Number(b);
      }
      function mul(a, b) {
        return Number(a) * Number(b);
      }
      function sub(a, b) {
        return Number(a) - Number(b);
      }
      function div(a, b) {
        return Number(a) / Number(b);
      }
      function percent(a, b) {
        return (Number(a) / Number(b)) * 100;
      }
      function root(a) {
        return Math.sqrt(Number(a));
      }
      function power(a, b) {
        return Number(a) ** Number(b);
      }
      function inverse(a) {
        return 1 / Number(a);
      }
      function sign(a) {
        return -a;
      }

      function appendNumber() {
        if (state?.currentValue?.includes(".") && payload === ".") {
          return;
        }
        state.currentValue = state.currentValue.toString() + payload.toString();
      }

      // const operators = ["+", "-", "*", "/", "1/x", "%", "^", "√"];

      // -------------------------------------- Operation here--------------------------------------------------------------------------------------------
      if (payload === "C" || payload === "CE") {
        state.history = [];
        state.currentValue = "";
        state.previousValue = "";
        state.value = 0;
      }

      if (payload === "←") {
        state.history.pop();
        state.value = Math.floor(state.value / 10);
      }

      if (Number(payload) % 1 === 0 || payload === ".") {
        appendNumber(payload);
        state.value = state.currentValue;
      }

      if (payload === "+/-") {
        state.currentValue = sign(state.currentValue);
        state.value = state.currentValue;
      }

      if (
        payload === "+" ||
        payload === "-" ||
        payload === "/" ||
        payload === "^" ||
        payload === "1/x" ||
        payload === "%" ||
        payload === "√" ||
        payload === "*"
      ) {
        if (payload === "1/x") {
          state.currentValue = inverse(state.currentValue);
        }

        if (payload === "√") {
          state.currentValue = root(state.currentValue);
        }

        if (state.currentValue === "") {
          return;
        }
        if (state.previousValue === "" && payload !== "+/-") {
          state.previousValue = state.currentValue;
          state.value = state.currentValue;
          state.history.push(state.previousValue, payload);
          state.currentValue = "";
        } else {
          state.history.push(state.currentValue, payload);
          if (payload === "+") {
            state.currentValue = add(state.previousValue, state.currentValue);
          }
          if (payload === "-") {
            state.currentValue = sub(state.previousValue, state.currentValue);
          }
          if (payload === "*") {
            state.currentValue = mul(state.previousValue, state.currentValue);
          }
          if (payload === "/") {
            state.currentValue = div(state.previousValue, state.currentValue);
          }
          if (payload === "^") {
            state.currentValue = power(state.previousValue, state.currentValue);
          }
          if (payload === "%") {
            state.currentValue = percent(
              state.previousValue,
              state.currentValue
            );
          }

          state.previousValue = state.currentValue;
          state.value = state.previousValue;
          state.currentValue = "";
        }
      }

      // -------------------------------------- Operation here--------------------------------------------------------------------------------------------

      // console.log(current(state.history));
    },
  },
});

export const mathActions = mathSlice.actions;

export default mathSlice;
