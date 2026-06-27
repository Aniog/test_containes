import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Bestsellers = () => {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-4">
            Bestsellers
          </h2>
          <p className="font-sans text-[var(--color-text-secondary)] max-w-md mx-auto">
            Our most loved pieces, chosen by you
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;