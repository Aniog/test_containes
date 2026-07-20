import React from 'react';
import ProductCard from '../home/ProductCard';

const RelatedProducts = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 border-t border-[#E5DFD6]">
      <h3 className="font-serif-custom text-2xl tracking-[0.05em] mb-8">You May Also Like</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
