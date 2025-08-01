/** @format */

import axios from "axios";
import { createContext, useContext, useState } from "react";

const ProdContext = createContext();

export const ProdProvider = ({ children }) => {
  const [cartProd, setCartProd] = useState([]);

  const API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5Z2Frcmp3bmd5emlqa29namRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExOTA5MTAsImV4cCI6MjA1Njc2NjkxMH0.mbb6EZb0Aj6kBOXZzgaQxsWCDG9vrMXWL8OXVrZ7BPI";

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://dygakrjwngyzijkogjdo.supabase.co/rest/v1/categories",
        {
          headers: {
            "Content-Type": "application/json",
            apikey: API_KEY,
            Authorization: `Bearer ${API_KEY}`,
          },
        },
      );
      console.log(response.data);
      const matchedProducts = response.data;
      return matchedProducts || null;
    } catch (error) {
      console.error(error);
    }
  };

  const getAboutProd = async (id) => {
    try {
      const response = await axios.get(
        `https://dygakrjwngyzijkogjdo.supabase.co/rest/v1/products`,
        {
          headers: {
            "Content-Type": "application/json",
            apikey: API_KEY,
          },
        },
      );

      console.log("Kelayotgan ID:", id);
      console.log("Response Data:", response.data);

      const matchedProduct = response.data.find((product) => product.id == id.id);

      console.log("Mos kelgan product:", matchedProduct);
      return matchedProduct || null;
    } catch (error) {
      console.error("Xatolik:", error);
      return null;
    }
  };

  const getProds = async () => {
    try {
      const response = await axios.get(
        "https://dygakrjwngyzijkogjdo.supabase.co/rest/v1/products",
        {
          headers: {
            "Content-Type": "application/json",
            apikey: API_KEY,
            Authorization: `Bearer ${API_KEY}`,
          },
        },
      );
      console.log(response.data);
      const matchedProducts = response.data;
      return matchedProducts || null;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProdContext.Provider
      value={{ API_KEY, getAboutProd, getCategories, getProds, cartProd, setCartProd }}
    >
      {children}
    </ProdContext.Provider>
  );
};

export const useProd = () => useContext(ProdContext);
