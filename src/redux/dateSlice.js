import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const initialState = {
  from: new Date().getTime(),
  to: new Date().getTime(),
  value: 0,
};

const dateSlice = createSlice({
  name: "date",
  initialState: initialState,
  reducers: {
    dateDifferance(state, action) {
      if (action.payload[1] === "from") {
        state.from = new Date(action.payload[0]).getTime();
      }

      if (action.payload[1] === "to") {
        state.to = new Date(action.payload[0]).getTime();
      }
      if (state.from !== 0 && state.to !== 0) {
        state.value = Math.abs((state.to - state.from) / (1000 * 60 * 60 * 24));
      }
    },
  },
});

export const dateActions = dateSlice.actions;

export default dateSlice;
