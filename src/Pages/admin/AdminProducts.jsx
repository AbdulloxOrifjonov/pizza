/** @format */
import React, { useEffect, useState } from "react";
import { useProd } from "../../context/ProdContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
  const navigate = useNavigate();
  const [prod, setProd] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [deletedProd, setDeletedProd] = useState(null);
  const [formData, setFormData] = useState({
    product_name: "",
    price: "",
    about_product_x: "",
    about_product_xl: "",
  });

  const { getProds, API_KEY } = useProd();

  const adminGetProd = async () => {
    const data = await getProds();
    if (data) setProd(data);
  };

  useEffect(() => {
    adminGetProd();
  }, []);

  const deleteProd = (id) => {
    setIsDelete(true);
    setDeletedProd(id);
  };

  const handleDelete = async (id) => {
    setIsDelete(false);
    try {
      await axios.delete(`https://dygakrjwngyzijkogjdo.supabase.co/rest/v1/products?id=eq.${id}`, {
        headers: {
          apikey: API_KEY,
          "Content-Type": "application/json",
        },
      });
      adminGetProd();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const openEditModal = (id) => {
    const foundProduct = prod.find((item) => item.id === id);
    if (foundProduct) {
      setSelectedProduct(foundProduct);
      setFormData({
        product_name: foundProduct.product_name || "",
        price: foundProduct.price || "",
        about_product_x: foundProduct.about_product_x || "",
        about_product_xl: foundProduct.about_product_xl || "",
      });
      setIsEditModalOpen(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await axios.patch(
        `https://dygakrjwngyzijkogjdo.supabase.co/rest/v1/products?id=eq.${selectedProduct.id}`,
        formData,
        {
          headers: {
            apikey: API_KEY,
            "Content-Type": "application/json",
            Prefer: "return=representation",
          },
        },
      );
      setIsEditModalOpen(false);
      adminGetProd();
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div className="admin-products">
      <h2 className="admin-products__title">Mahsulotlar</h2>
      <div className="admin-products__grid">
        {prod.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.product_name} className="product-card__image" />
            <h3 className="product-card__name">{product.product_name}</h3>
            <p className="product-card__price">{product.price} so'm</p>
            <p className="product-card__desc">{product.about_product_x}</p>
            <p className="product-card__desc-xl">{product.about_product_xl}</p>
            <div className="product-card__actions">
              <button className="btn view" onClick={() => navigate(`/product/${product.id}`)}>
                View
              </button>
              <button className="btn edit" onClick={() => openEditModal(product.id)}>
                Edit
              </button>
              <button className="btn delete" onClick={() => deleteProd(product.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="modal-overlay" onClick={() => setIsEditModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsEditModalOpen(false)}>
              ×
            </button>
            <h3>Mahsulotni tahrirlash</h3>
            <input
              type="text"
              name="product_name"
              placeholder="Nomi"
              value={formData.product_name}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Narxi"
              value={formData.price}
              onChange={handleChange}
            />
            <input
              type="text"
              name="about_product_x"
              placeholder="Qisqacha tavsif"
              value={formData.about_product_x}
              onChange={handleChange}
            />
            <textarea
              name="about_product_xl"
              placeholder="Batafsil tavsif"
              value={formData.about_product_xl}
              onChange={handleChange}
            />
            <div className="modal-actions">
              <button className="btn-save" onClick={handleUpdate}>
                Saqlash
              </button>
              <button className="btn-cancel" onClick={() => setIsEditModalOpen(false)}>
                Bekor qilish
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {isDelete && (
        <div className="modal-overlay" onClick={() => setIsDelete(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <h3>Rostdan ham ushbu mahsulotni o‘chirmoqchimisiz?</h3>
            <p>Bu amalni qaytarib bo‘lmaydi.</p>
            <div className="modal-actions ">
              <button className="btn-delete" onClick={() => handleDelete(deletedProd)}>
                Ha, o‘chirish
              </button>
              <button className="btn-cancel " onClick={() => setIsDelete(false)}>
                Yo‘q, bekor qilish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
