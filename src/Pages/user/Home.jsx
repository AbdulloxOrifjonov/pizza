/** @format */

import React, { useEffect, useState } from "react";
import pizza from "../../images/pizza.png";
import chiken from "../../images/chiken.png";
import ugrem from "../../images/ugrem.png";
import korn from "../../images/korn.png";
import aktsiya from "../../images/aktsiya.png";
import { useNavigate } from "react-router-dom";
import { useProd } from "../../context/ProdContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
  const { getProds } = useProd();

  // eslint-disable-next-line
  useEffect(() => {
    getProd();
  }, []);

  const getProd = async () => {
    await getProds().then((data) => {
      if (data) {
        console.log(data);
        setProducts(data);
      } else {
        console.log("Product not found");
      }
    });
  };

  const aboutProduct = (id) => {
    if (id) {
      navigate(`/product/${id}`);
    }
  };

  return (
    <div className="background">
      <div className="home-hero container">
        <div className="home-hero-1">
          <img
            src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?cs=srgb&dl=pexels-pixabay-357756.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="home-hero-2">
          <div className="home-hero-2-col-1">
            <img src={chiken} alt="" />
            <div className="home-hero-2-col-1-img2">
              <img src={ugrem} alt="" />
              <img src={korn} alt="" />
            </div>
          </div>
          <div className="home-hero-2-col-2">
            <img src={pizza} alt="" />
            <img src={aktsiya} alt="" />
          </div>
        </div>
      </div>
      <div className="home-product container">
        <div className="home-product-nav">
          <h2
            onClick={() => (isActive === false ? setIsActive(true) : true)}
            className={isActive === true ? "active" : ""}
          >
            Новинки
          </h2>
          <h2
            onClick={() => (isActive === true ? setIsActive(false) : false)}
            className={isActive !== true ? "active" : ""}
          >
            Популярное
          </h2>
        </div>

        <div className="home-products">
          {products.map((prod) => (
            <div key={prod.id} className="home-prod" onClick={() => aboutProduct(prod.id)}>
              <div className="home-prod-img">
                <img src={prod.image} alt="" />
              </div>
              <div className="home-prod-text">
                <h2>{prod.product_name}</h2>
                <p>{prod.about_product_x}</p>
                <div className="home-prod-btn">
                  <h2>{prod.price} СОМ</h2>
                  <button>Хочу!</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-us container">
        <h2>Заказать суши в Бишкеке</h2>
        <p>
          Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом,
          приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также
          собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете
          заказать суши в Харькове с доставкой на дом или в офис.
        </p>
        <p>В нашем меню более 20 видов суши:</p>
        <div className="about-uss">
          <p>Классические с сырым лососем, тунцом, окунем.</p>
          <p>Экзотические с тигровой креветкой, морским гребешком.</p>
          <p>Пикантные с копченым лососем, угрем.</p>
        </div>
        <p>
          В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы,
          где японский майонез сочетается с рыбой, морепродуктами, угрем...
        </p>
      </div>
    </div>
  );
};

export default Home;
