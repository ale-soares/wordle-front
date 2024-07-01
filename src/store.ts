import { configureStore } from "@reduxjs/toolkit";

import guessSlice from "./features/guessSlice";

const store = configureStore({
  reducer: {
    guess: guessSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
