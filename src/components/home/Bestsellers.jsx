import React from 'react';
import { products } from '../../data/products.js';
import ProductCard from '../ProductCard.jsx';

export default function Bestsellers() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl uppercase tracking-widest">Bestsellers</h2>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto">Our most-loved pieces, chosen by women who know that subtle luxury speaks loudest.</p>
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