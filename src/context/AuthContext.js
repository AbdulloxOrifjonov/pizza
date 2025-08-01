/** @format */

import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

const changeUser = () => {
  setUser("")
}

  const checkAdmin = async () => {
    if (!token) {
      localStorage.setItem("admin", "false");
      navigate("/adminLogin");
      return;
    } else {
      localStorage.setItem("admin", "true");
      navigate("/admin/add");
      return;
    }
  };

  return <AuthContext.Provider value={{ user,changeUser,  checkAdmin }}>{children}</AuthContext.Provider>;
};

// Contextni oson olish uchun hook yaratish
export const useAuth = () => useContext(AuthContext);
