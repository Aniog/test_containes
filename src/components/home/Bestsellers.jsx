import React from 'react';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-ink-950 mb-3">Bestsellers</h2>
          <p className="text-sm text-ink-500 max-w-md mx-auto">The pieces our community wears most. Timeless silhouettes in warm gold.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
