import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Show first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-gold)] mb-2">Signature Pieces</p>
          <h2 className="text-4xl md:text-5xl font-serif">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block text-sm uppercase tracking-widest hover:text-[var(--color-gold-dark)]">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/shop" className="text-sm uppercase tracking-widest hover:text-[var(--color-gold-dark)]">
          View All →
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
