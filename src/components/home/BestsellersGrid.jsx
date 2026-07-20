import React from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function BestsellersGrid() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-base">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} showQuickAdd />
          ))}
        </div>
      </div>
    </section>
  );
}
