import React from 'react';
import ProductCard from './ProductCard';
import products from '@/data/products';

export default function BestsellersGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-14">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-muted mb-4">
          Most Loved
        </p>
        <h2 className="section-heading">Bestsellers</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}