import React from "react";
import ProductCard from "./ProductCard.jsx";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
