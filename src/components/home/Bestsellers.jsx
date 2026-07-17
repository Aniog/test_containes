import React from 'react';
import { bestsellers } from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-widest3 uppercase text-accent mb-3">Most Loved</p>
        <h2 className="font-serif text-3xl lg:text-4xl text-deep-900 font-light">Bestsellers</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
