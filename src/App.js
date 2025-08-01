/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/user/Home";
import BasicLayout from "./Layout/BasicLayout";
import AddProduct from "./Pages/admin/AddProduct";
import AdminLayout from "./Layout/AdminLayout";
import AdminLogin from "./Pages/admin/AdminLogin";
import AboutProduct from "./Pages/user/AboutProduct";
import Cart from "./Pages/user/Cart";
import CartLayout from "./Layout/CartLayout";
import AdminProducts from "./Pages/admin/AdminProducts";
import AddCategory from "./Pages/admin/AddCategory";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<AboutProduct />} />
        </Route>
        <Route path="/" element={<CartLayout />}>
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="add" element={<AddProduct />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="categories" element={<AddCategory />} />
        </Route>
        <Route path="adminLogin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
