import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: "00:00:00",
};

const timeSlice = createSlice({
  name: "time",
  initialState: initialState,
  reducers: {
    timer(state, actions) {
      state.time = actions.payload;
    },
  },
});

export const timeActions = timeSlice.actions;

export default timeSlice;
