/** @format */

import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              {" "}
              <Link className="li" to={"/admin/add"}>
                AddProduct
              </Link>
            </li>
            |
            <li>
              {" "}
              <Link className="li" to={"/admin/categories"}>
                AddCategory
              </Link>
            </li>
            |
            <li>
              {" "}
              <Link className="li" to={"/admin/products"}>
                Products
              </Link>
            </li>
            |
            <li>
              {" "}
              <Link className="li" to={"/admin/add"}>
                SMS
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default AdminNavbar;
