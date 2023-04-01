import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import News from "./components/News";
// import { BrowserRouter as Main } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Routes/RootLayout";

//Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <News key="general" pageSize={5} country="in" category="general" />
        ),
      },
      {
        path: "/business",
        element: (
          <News key="business" pageSize={5} country="in" category="business" />
        ),
      },
      {
        path: "/entertainment",
        element: <News pageSize={5} country="in" category="entertainment" />,
      },
      {
        path: "/health",
        element: (
          <News key="health" pageSize={5} country="in" category="health" />
        ),
      },
      {
        path: "/science",
        element: (
          <News key="science" pageSize={5} country="in" category="science" />
        ),
      },
      {
        path: "/sports",
        element: (
          <News key="sports" pageSize={5} country="in" category="sports" />
        ),
      },
      {
        path: "/technology",
        element: (
          <News
            key="technology"
            pageSize={5}
            country="in"
            category="technology"
          />
        ),
      },
    ],
  },
]);

export default class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}
