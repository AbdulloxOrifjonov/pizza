/** @format */

import { useEffect, useState } from "react";
import axios from "axios";
import { useProd } from "../../context/ProdContext";

const AddProduct = () => {
  const { getCategories, API_KEY } = useProd();

  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    product_name: "",
    price: "",
    category_name: "",
    about_product_x: "",
    about_product_xl: "",
    gram: "",
    image: "",
  });
  useEffect(() => {
    prodCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const prodCategories = async () => {
    const data = await getCategories();
    console.log(data);
    if (data) setCategories(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        id: crypto.randomUUID(),
        ...product,
      };

      const response = await axios.post(
        "https://dygakrjwngyzijkogjdo.supabase.co/rest/v1/products",
        newProduct,
        {
          headers: {
            "Content-Type": "application/json",
            apikey: API_KEY,
          },
        },
      );

      console.log("Product added:", response.data);

      setProduct({
        product_name: "",
        category_name: "",
        price: "",
        about_product_x: "",
        about_product_xl: "",
        gram: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="add">
      <div className="add-product">
        <div className="container">
          {/* <h2>Add New Product</h2> */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="product_name"
              placeholder="Product Name"
              value={product.product_name}
              onChange={handleChange}
              required
            />
            <select
              name="category_name"
              value={product.category_name}
              onChange={handleChange}
              required
              className="select-category"
            >
              <option value="" disabled>
                Выберите категорию
              </option>
              {categories.map((cat, i) => (
                <option value={cat.category_name}>{cat.category_name}</option>
              ))}
              {/* <option value="Пицца">Пицца</option>
              <option value="Сеты">Сеты</option>
              <option value="WOK">WOK</option>
              <option value="Роллы">Роллы</option>
              <option value="Суши">Суши</option>
              <option value="Салаты">Салаты</option>
              <option value="Супы">Супы</option>
              <option value="Корн доги">Корн доги</option>
              <option value="Напитки">Напитки</option>
              <option value="Акции">Акции</option> */}
            </select>

            <input
              type="text"
              name="image"
              placeholder="Image url"
              value={product.image}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={handleChange}
              required
            />
            <textarea
              name="about_product_x"
              placeholder="About Product (X)"
              value={product.about_product_x}
              onChange={handleChange}
              required
            ></textarea>
            <textarea
              name="about_product_xl"
              placeholder="About Product (XL)"
              value={product.about_product_xl}
              onChange={handleChange}
              required
            ></textarea>
            <input
              type="number"
              name="gram"
              placeholder="Gram"
              value={product.gram}
              onChange={handleChange}
              required
            />
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
