import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../types/RootState";
import type { Guess, Char } from "../types/Guess";

const initialState: Guess = {
  guess: [],
};

const guessSlice = createSlice({
  name: "guess",
  initialState,
  reducers: {
    addChar(state, action) {
      const newChar: Char = {
        id: state.guess.length,
        value: action.payload,
        status: 0,
      };
      state.guess.push(newChar);
    },
    deleteChar(state) {
      state.guess.pop();
    },
    updateStatus(state, action) {
      console.log(state, action);
    },
  },
});

export const { addChar, deleteChar, updateStatus } = guessSlice.actions;

export const selectGuess = (state: RootState) => state.guess;

export default guessSlice.reducer;
