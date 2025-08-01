/** @format */

import React from "react";
import search from "../../images/search.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-call">
        <h4>Наш телефон</h4>
        <h3>+996 705 188 955</h3>
        <h3>+996 555 188 955</h3>
        <h5>работаем с 10:00 до 00:00</h5>
      </div>
      <div className="hr-nabar"></div>
      <div className="navbar-center">
        <div className="navbar-center-1">
          <h4>Город:</h4>
          <h3>Бишкек</h3>
        </div>
        <div className="navbar-center-2">
          <div className="flex">
            <h3>Отзывы</h3>
            <h4>Доставка и оплата</h4>
          </div>
          <div className="navbar-search">
            <img src={search} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
