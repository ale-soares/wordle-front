import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  // status: "idle",
  // entities: {},
  counter: 0,
};

const guessSlice = createSlice({
  name: "guess",
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    // charAdded(state, action) {
    //   const todo = action.payload;
    //   state.entities[todo.id] = todo;
    // },
    // todoToggled(state, action) {
    //   const todoId = action.payload;
    //   const todo = state.entities[todoId];
    //   todo.completed = !todo.completed;
    // },
  },
});

export const { increment } = guessSlice.actions;

export const selectCount = (state: RootState) => state.guess.counter;

export default guessSlice.reducer;
