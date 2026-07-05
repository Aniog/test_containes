import React from 'react';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  // Get top-rated products for bestsellers
  const bestsellers = [...products]
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] text-[var(--color-gold-primary)] mb-3">
            CUSTOMER FAVORITES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
            Our Bestsellers
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 stagger-children">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
