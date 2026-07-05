import React from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">Curated for You</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
          <div className="w-16 h-px bg-[#b8860b] mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
