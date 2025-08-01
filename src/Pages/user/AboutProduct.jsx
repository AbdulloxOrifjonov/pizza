/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProd } from "../../context/ProdContext";
import Loading from "../../components/User/Loading";

const AboutProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prod, setProd] = useState([]);
  const [prodincrement, setProdIncrement] = useState(1);
  const navigate = useNavigate();
  const id = useParams();
  const { getAboutProd, setCartProd } = useProd();
  console.log(prod);

  const prodIncrement = () => {
    setProdIncrement(prodincrement + 1);
  };

  const toCart = () => {
    navigate("/cart");
    console.log(prodincrement);
    setCartProd({
      id: prod.id,
      image: prod.image,
      product_name: prod.product_name,
      gram: prod.gram,
      price: prod.price * prodincrement,
      amount: prodincrement,
      about_product_x: prod.about_product_x,
      about_product_xl: prod.about_product_xl,
      category_name: prod.category_name,
    });
  };

  const prodDecrement = () => {
    if (prodincrement > 1) {
      setProdIncrement(prodincrement - 1);
      // console.log(prodincrement);
    }
  };

  const getProd = async (id) => {
    await getAboutProd(id).then((data) => {
      if (data) {
        console.log("Product:", data);
        setProd(data);
      } else {
        console.log("Product not found");
      }
    });
  };

  useEffect(() => {
    getProd(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (prod.length === 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [prod]);

  return (
    <div className="aboutProds">
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <div className="aboutProd">
          <img src={prod.image} alt="" />
          <div className="aboutTexts">
            <h2>{prod.product_name}</h2>
            <h4>{prod.gram} грамм</h4>
            <div className="aboutPrice">
              <h3>{prod.price * prodincrement} СОМ</h3>
              <div className="aboutBtn">
                <button onClick={() => prodDecrement()}>-</button>
                <h3>{prodincrement}</h3>
                <button onClick={() => prodIncrement()}>+</button>
              </div>
            </div>
            <h3>Состав</h3>
            <p>{prod.about_product_xl}</p>
            <button onClick={() => toCart()}>Хочу!</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutProduct;
