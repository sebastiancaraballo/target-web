import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { setupStore } from "./store";
import { SignIn, Home, SignUp } from '@components/index';
import './index.scss'

const store = setupStore();
const persistor = persistStore(store);

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
