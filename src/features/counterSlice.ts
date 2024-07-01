import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../types/RootState";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  // status: "idle",
  // entities: {},
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
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

export const { increment } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.count;

export default counterSlice.reducer;
