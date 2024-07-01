import { configureStore } from "@reduxjs/toolkit";
import songSlice from "./features/song";
import appSettings from "./features/appSettings";

export const store = configureStore({
  reducer: {
    songSlice,
    appSettings,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
