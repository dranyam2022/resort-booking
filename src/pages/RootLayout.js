import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
