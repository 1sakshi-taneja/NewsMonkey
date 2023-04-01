import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Navbar from "../Component/Layout/Navbar";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
