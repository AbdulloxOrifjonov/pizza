/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useProd } from "../../context/ProdContext";

const AddCategory = () => {
  const { getCategories, API_KEY } = useProd();

  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoryName.trim() === "") return;

    console.log(categoryName);

    const newCategory = {
      id: crypto.randomUUID(),
      category_name: categoryName,
    };

    try {
      const response = await axios.post(
        "https://dygakrjwngyzijkogjdo.supabase.co/rest/v1/categories",
        newCategory,
        {
          headers: {
            "Content-Type": "application/json",
            apikey: API_KEY,
          },
        },
        );
        console.log(response);
      //   console.log(response.data);
      prodCategories();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const prodCategories = async () => {
    const data = await getCategories();
    console.log(data);
    if (data) setCategories(data);
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };
  useEffect(() => {
    prodCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="add-category">
      <div className="add-category-page">
        <h2>Kategoriya qo‘shish</h2>

        <form className="category-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Kategoriya nomi"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <button type="submit">Qo‘shish</button>
        </form>

        <div className="category-list">
          <h3>Mavjud kategoriyalar</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nomi</th>
                <th>Amallar</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, index) => (
                <tr key={cat.id}>
                  <td>{index + 1}</td>
                  <td>{cat.category_name}</td>
                  <td className="actions">
                    <button className="view-btn">View</button>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(cat.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
