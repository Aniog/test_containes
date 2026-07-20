import React from 'react';
import { getBestsellers } from '../../data/products';
import ProductCard from '../ui/ProductCard';

export default function Bestsellers() {
  const bestsellers = getBestsellers();

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-light)] mb-3">Most Loved</p>
          <h2 className="serif-heading text-3xl md:text-4xl tracking-wide">Bestsellers</h2>
          <div className="w-12 h-px bg-[var(--velmora-gold)] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/shop" className="btn-outline inline-block">
            View All Pieces
          </a>
        </div>
      </div>
    </section>
  );
}
