import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

export default function Bestsellers() {
  return (
    <section className="section-padding bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-500)] mb-3">Most Loved</p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-4">Bestsellers</h2>
          <div className="w-12 h-px bg-[var(--color-gold-400)] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">View All Pieces</Link>
        </div>
      </div>
    </section>
  );
}
