import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Layout from "./components/views/Layout";
import Home from "./components/views/Home";
import CoverCardDetails from "./components/views/CoverCardDetails";
import Search from "./components/views/Search";
import Signup from "./components/views/Signup";
import "./index.css";
import Login from "./components/views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "artist/:id",
        element: <CoverCardDetails />,
        loader: ({ params }) => params,
      },
      {
        path: "album/:id",
        element: <CoverCardDetails />,
        loader: ({ params }) => params,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
