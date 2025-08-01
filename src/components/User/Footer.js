/** @format */

import React from "react";
import instagram from "../../images/instagram.svg";
import whatsapp from "../../images/whatsapp.svg";
import telegram from "../../images/telegram.svg";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-hr">
        <hr />
      </div>
      <div className="footer-element">
        <div className="footer-step-1">
          <h3>О компании</h3>
          <h3>Доставка и оплата</h3>
          <h3>Лента материалов</h3>
          <h3>Политика возврата</h3>
        </div>

        <div className="footer-step-3">
          <h3>Тел:+996 705 188 955 </h3>
          <h3>Тел:+996 555 188 955 </h3>
          <h3>Адрес:Бакаева 126</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
