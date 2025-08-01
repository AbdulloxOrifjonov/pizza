/** @format */

import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/Admin/AdminNavbar";

const AdminLayout = () => {
  const {  checkAdmin } = useAuth();

  useEffect(() => {
    checkAdmin();
    console.log(localStorage.getItem("admin"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="admin">
      <AdminNavbar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
