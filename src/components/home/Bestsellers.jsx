import React from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-velmora-gold text-xs tracking-[0.35em] uppercase font-medium mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
