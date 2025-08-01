/** @format */

import React from "react";
import "../scss/main.scss";
import "../App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/User/Sidebar";
import Navbar from "../components/User/Navbar";
import Karzinka from "../components/User/karzinka";
import Footer from "../components/User/Footer";

const BasicLayout = () => {
  return (
    <div className="basicLayout">
      <Sidebar />

      <div>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
      <Karzinka />
    </div>
  );
};

export default BasicLayout;
