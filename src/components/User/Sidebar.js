/** @format */

import React from "react";
import logo from "../../images/logo.png";
import menu10 from "../../images/10.png";
import menu9 from "../../images/9.png";
import menu8 from "../../images/8.png";
import menu7 from "../../images/7.png";
import menu6 from "../../images/6.png";
import menu5 from "../../images/5.png";
import menu4 from "../../images/4.png";
import menu3 from "../../images/3.png";
import menu2 from "../../images/2.png";
import menu1 from "../../images/1.png";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="" />
      <h1>Romsem</h1>
      <ul className="sidebar-menu">
        <li>
          <img src={menu1} alt="" /> Пицца
        </li>
        <li>
          <img src={menu2} alt="" /> Сеты
        </li>
        <li>
          <img src={menu3} alt="" /> WOK
        </li>
        <li>
          <img src={menu4} alt="" /> Роллы
        </li>
        <li>
          <img src={menu5} alt="" /> Суши
        </li>
        <li>
          <img src={menu6} alt="" /> Салаты
        </li>
        <li>
          <img src={menu7} alt="" /> Супы
        </li>
        <li>
          <img src={menu8} alt="" /> Корн доги
        </li>
        <li>
          <img src={menu9} alt="" /> Напитки
        </li>
        <li>
          <img src={menu10} alt="" /> Акции
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
