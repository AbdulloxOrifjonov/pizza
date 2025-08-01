/** @format */

import React, { useEffect, useState } from "react";
import time from "../../images/time.png";
import back from "../../images/back.png";
import nalichi from "../../images/cart_nalichi_icon.png";
import karta from "../../images/cart_karta_icon.png";
import ptichka from "../../images/ptichka.png";
import { useProd } from "../../context/ProdContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {  cartProd } = useProd();
  const [nalichiActive, setNalichiActive] = useState(true);
  const [kuryerActive, setKuryerActive] = useState(true);
  const [vremya, setVremya] = useState(true);
  const [vremyaModal, setVremyaModal] = useState(true);
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [summaActive, setSummaActive] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (data) => {
    console.log("Yuborilgan data:", data);

    let newData = { ...formData, product: cartProd };

    if (vremya === true) {
      newData.vremya = "На сейчас";
    }

    if (kuryerActive === false) {
      const { dom, etaj, kod, kv, podezd, street, ...filtered } = newData;
      newData = filtered;
    }

    Object.keys(newData).forEach((key) => {
      if (newData[key] === "") {
        delete newData[key];
      }
    });

    console.log("Yuboriladigan yakuniy data:", newData);
    setFormData(newData);
    setShowModal(true);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!cartProd.price) {
      //? Agar page refresh bolsa Home page ga otib yuboradi
      navigate("/");
    }
    console.log(formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const productAdded = () => {
    alert("!! Ваш заказ скоро прибудет !! \n        Спасибо за покупку 😀");
    navigate("/");
  };

  return (
    <>
      <div className="cart">
        <nav className="cartNav">
          <div className="cartLeft">
            <h2>
              <img src={back} alt="" /> Продолжить выбор
            </h2>
          </div>
          <div className="cartCenter">
            <h4>Наш телефон</h4>
            <h3>+996 705 188 955</h3>
            <h3>+996 705 188 955</h3>
            <h5>
              <img src={time} alt="" /> работаем с 10:00 до 00:00
            </h5>
          </div>
        </nav>
        <div className="hrNav"></div>
        <div className="cartMain">
          <div className="cartElement">
            <h2>Ваши данные</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(formData);
              }}
            >
              <div className="cartInputs">
                <div className="cartInput1">
                  <div className="flexCart">
                    <input
                      type="phone"
                      name="phone"
                      placeholder="Телефон"
                      required
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Имя"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="flexCart">
                    <div
                      onClick={() => setNalichiActive(true)}
                      className={nalichiActive === true ? "btn" : "btn2"}
                    >
                      <img src={nalichi} alt="" />
                      Наличными
                    </div>
                    <div
                      onClick={() => setNalichiActive(false)}
                      className={nalichiActive === true ? "btn2" : "btn"}
                    >
                      <img src={karta} alt="" />
                      Картой
                    </div>
                  </div>
                  <>
                    {nalichiActive === true ? (
                      <div className="flexCart " id="zdachiinput">
                        <div className="zdachi" onClick={() => setSummaActive(!summaActive)}>
                          {summaActive ? <img src={ptichka} alt="" /> : ""}
                          <h3>Подготовить сдачу с</h3>
                        </div>
                        {summaActive ? (
                          <input
                            type="text"
                            name="zdachi"
                            placeholder="Сумма"
                            onChange={handleInputChange}
                          />
                        ) : (
                          <input
                            type="text"
                            name="zdachi"
                            disabled
                            placeholder="Сумма"
                            onChange={handleInputChange}
                            className="disabledInput"
                          />
                        )}
                      </div>
                    ) : (
                      <div className="flexCart" id="comment">
                        <h2>Скоро будет 😀</h2>
                      </div>
                    )}
                  </>
                  <div className="flexCart" id="comment">
                    <input
                      type="text"
                      name="comment"
                      placeholder="Комменатрий к заказу"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="cartInput2">
                  <div className="flexCart">
                    <div
                      onClick={() => setKuryerActive(true)}
                      className={kuryerActive === true ? "btn" : "btn2"}
                    >
                      Курьером
                    </div>
                    <div
                      onClick={() => setKuryerActive(false)}
                      className={kuryerActive === true ? "btn2" : "btn"}
                    >
                      Самовывоз
                    </div>
                  </div>
                  {kuryerActive === true ? (
                    <>
                      <div className="flexCart">
                        <input
                          type="text"
                          name="street"
                          placeholder="Улица"
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="text"
                          name="dom"
                          placeholder="Дом"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="flexCart" id="address">
                        <input
                          type="text"
                          name="kv"
                          placeholder="Кв"
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="number"
                          name="podezd"
                          placeholder="Подъезд"
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="number"
                          name="etaj"
                          placeholder="Этаж"
                          onChange={handleInputChange}
                          required
                        />
                        <input
                          type="number"
                          name="kod"
                          placeholder="Код"
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </>
                  ) : (
                    <div className="flexCart" id="comment">
                      <input
                        type="phone"
                        name="pickupPhone"
                        placeholder="Номер телефона"
                        value={formData.phone}
                        readOnly
                      />
                    </div>
                  )}
                  <div className="flexCart">
                    <div
                      onClick={() => setVremya(true)}
                      className={vremya === true ? "btn" : "btn2"}
                    >
                      На сейчас
                    </div>
                    <div
                      onClick={() => {
                        setVremya(false);
                        setVremyaModal(false);
                      }}
                      className={vremya === true ? "btn2" : "btn"}
                    >
                      На время
                    </div>
                  </div>

                  <div className={!vremya && !vremyaModal ? "vremyaModal" : "displayNone"}>
                    <button
                      type="button"
                      className="closeVremya"
                      onClick={() => {
                        setVremya(true);
                        setVremyaModal(true);
                      }}
                    >
                      X
                    </button>
                    <input
                      type="time"
                      name="vremya"
                      placeholder="Введите время"
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setVremyaModal(true);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              {/* 👉 SUBMIT BUTTON */}
              <button className="addProduct" type="submit">
                Оформить заказ
              </button>
            </form>
          </div>
        </div>
        <footer>
          <h3>
            Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на обработку
            персональных данных в соответствии с Публичной оффертой
          </h3>
        </footer>
      </div>

      <div className="korzina">
        <div className="korzina_prods">
          <div className="korzina_btn">
            <h2>Корзина</h2>
          </div>
          <div className="karzina_prod">
            <img src={cartProd.image} alt="" />
            <div className="prod_texts">
              <h4>{cartProd.product_name}</h4>
              <div className="total">
                <h3>{cartProd.price / cartProd.amount} СОМ</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="korzinka_total">
          <div className="total_text">
            <h3>{cartProd.amount} товар</h3>
            <h3>{cartProd.price} СОМ</h3>
          </div>
          <hr />
          <div className="total_text">
            <h3>Скидка</h3>
            <h3>0 СОМ</h3>
          </div>
          <hr />
          <div className="total_text">
            <h3>Доставка</h3>
            <h3>Беслатно</h3>
          </div>
          <hr />
          <div className="total_text2">
            <h3>Итого</h3>
            <h3>{cartProd.price} СОМ</h3>
          </div>
        </div>
      </div>

      {showModal && (
        <>
          <div className="modalOverlay" onClick={() => closeModal()}></div>
          <div className="modalCheck">
            <button className="closeBtn" onClick={() => closeModal()}>
              X
            </button>
            <h2>Чек заказа</h2>

            <div className="checkItem">
              <strong>Имя:</strong> {formData.name}
            </div>
            <div className="checkItem">
              <strong>Телефон:</strong> {formData.phone}
            </div>
            {formData.street ? (
              <div className="checkItem">
                <strong>Адрес:</strong> {formData.street}, дом {formData.dom}, кв {formData.kv},
                подъезд {formData.podezd}, этаж {formData.etaj}, код {formData.kod}
              </div>
            ) : (
              ""
            )}
            <div className="checkItem">
              <strong>Время доставки:</strong> {formData.vremya}
            </div>

            <div className="checkItem">
              <strong>Продукт:</strong> {formData.product?.product_name}
            </div>
            <div className="checkItem">
              <strong>Цена:</strong> {formData.product?.price / formData.product?.amount} СОМ
            </div>
            <div className="checkItem">
              <strong>Количество:</strong> {formData.product?.amount} шт.
            </div>

            <div className="checkItem">
              <strong>Итого:</strong>{" "}
              {formData.product?.price ? `${formData.product.price} СОМ` : "—"}
            </div>

            <button className="addChek" onClick={() => productAdded()}>
              Оформить😀
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
