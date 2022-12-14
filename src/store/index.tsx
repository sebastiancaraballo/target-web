import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { targetApi } from "@services/targetApi";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth.reducer";

const rootReducer = combineReducers({
  [targetApi.reducerPath]: targetApi.reducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persisterReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = (preloadedState) =>
  configureStore({
    reducer: persisterReducer,
    preloadedState,
    middleware: (getMiddleWare) =>
      getMiddleWare({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(targetApi.middleware),
  });
