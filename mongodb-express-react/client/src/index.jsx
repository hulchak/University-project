import React from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {lazy, Suspense} from "react";
import {Provider} from "react-redux";
import {store} from "./store/store.js";

import "./styles/index.css";

const App = lazy(() => import("./App.jsx"));
const Users = lazy(() => import("./components/users/Users.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "users",
        element: <Users/>
      }
    ]
  }
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router}/>
      </Suspense>
    </Provider>
  </React.StrictMode>
);