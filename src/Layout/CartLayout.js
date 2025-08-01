/** @format */

import React from "react";
import { Outlet } from "react-router-dom";


const CartLayout = () => {
  return (
    <div className="cartLayout">
      <div className="cartWidth">
        <Outlet />
      </div>

    </div>
  );
};

export default CartLayout;
