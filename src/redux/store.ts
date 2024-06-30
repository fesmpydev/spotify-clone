import { configureStore } from "@reduxjs/toolkit";
import song from "./features/song";

export const store = configureStore({
  reducer: {
    song,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
