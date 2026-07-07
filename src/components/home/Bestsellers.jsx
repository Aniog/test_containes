import React from 'react';
import products from '@/data/products';
import ProductCard from './ProductCard';

export default function Bestsellers() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-bronze-900 tracking-wide mb-3">
          Bestsellers
        </h2>
        <p className="text-sm text-taupe-500 tracking-[0.15em] uppercase">
          The pieces everyone is talking about
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
