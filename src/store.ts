import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./features/counterSlice";
import guessSlice from "./features/guessSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    guess: guessSlice,
  },
});

export default store;
