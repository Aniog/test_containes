import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-medium mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
