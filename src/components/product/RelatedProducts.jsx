import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/data/products';

const RelatedProducts = ({ currentId }) => {
  const related = products.filter((p) => p.id !== currentId).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">You May Also Like</p>
          <h2 className="section-title">Complete the Look</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {related.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
