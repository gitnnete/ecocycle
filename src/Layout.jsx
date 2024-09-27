import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Constant/Navbar";
import Footer from "./Components/Constant/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
