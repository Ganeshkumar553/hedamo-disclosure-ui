import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import StatusBadge from "../components/StatusBadge";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "24px" }}>
      <h2>{product.name}</h2>
      <StatusBadge status={product.status} />
      <p>Category: {product.category}</p>
      <p>Producer: {product.producer}</p>
      <p>Declared by: {product.declaredBy}</p>
      <p>Declared on: {product.declaredOn}</p>
      <p>Evidence attached: {product.evidenceCount}</p>

      <h3>Version History</h3>
      <ul>
        {product.versions.map(v => (
          <li key={v.version}>
            v{v.version} - {v.status} - {v.date}
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: "16px",
          padding: "12px",
          background: "#f3f4f6",
          borderLeft: "4px solid #2563eb",
          fontSize: "12px"
        }}
      >
        This page presents producer-declared information; it is not
        certification or verification.
      </div>
    </div>
  );
};

export default ProductDetail;
