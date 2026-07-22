import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="section bg-[var(--velmora-bg)]">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-[var(--velmora-gold-dark)]">Curated for You</span>
            <h2 className="heading-serif text-4xl mt-1">Bestsellers</h2>
          </div>
          <Link to="/shop" className="hidden md:block text-sm tracking-[0.08em] uppercase hover:text-[var(--velmora-gold-dark)]">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hover:text-[var(--velmora-gold-dark)]">
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
