import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>Rating: {product.rating} ⭐</p>
        <button onClick={() => setShowModal(true)}>View</button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> {product.rating} ⭐</p>
            <p><strong>Description:</strong> {product.description}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
