import React from "react";
import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";
import "../styles/components.css";

const ProductRow = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-row"
      onClick={() => navigate(`/product/${product.id}`)}
      tabIndex="0"
    >
      <div className="row-top">
        <h3>{product.name}</h3>
        <StatusBadge status={product.status} />
      </div>
      <p className="row-bottom">
        {product.category} · {product.producer} · Updated: {product.updatedAt}
      </p>
    </div>
  );
};

export default ProductRow;
