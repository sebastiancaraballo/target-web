import { configureStore } from "@reduxjs/toolkit";
import welcomedReducer from "@/state/features/welcomed";

export const store = configureStore({
  reducer: { welcomed: welcomedReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
