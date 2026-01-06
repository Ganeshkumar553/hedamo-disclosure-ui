import React, { useState } from "react";
import { products } from "../data/products";
import ProductRow from "../components/ProductRow";

const ProductList = () => {
  const [search, setSearch] = useState("");

  const filtered = products.filter(
    p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.producer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "24px" }}>
      <input
        type="text"
        placeholder="Search products or producers..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "16px"}}
      />

      {filtered.length ? (
        filtered.map(p => <ProductRow key={p.id} product={p} />)
      ) : (
        <p>No products match your search or filter criteria.</p>
      )}
    </div>
  );
};

export default ProductList;
