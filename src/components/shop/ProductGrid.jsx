import React from 'react';
import ProductCard from '../product/ProductCard';

const ProductGrid = ({ products }) => {
  if (!products.length) {
    return (
      <div className="rounded-2xl border border-border bg-white p-10 text-center text-sm text-ink-secondary">
        No products match your filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
