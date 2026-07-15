import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.tags.includes('bestseller'));

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-velmora-gold mb-2">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide">Bestsellers</h2>
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
