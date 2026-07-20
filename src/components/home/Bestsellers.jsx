import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="uppercase tracking-[0.15em] text-xs text-velmora-gold-dark mb-2">Curated for You</p>
          <h2 className="heading-serif text-4xl md:text-5xl">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block text-sm tracking-[0.08em] uppercase hover:text-velmora-gold-dark">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/shop" className="text-sm tracking-[0.08em] uppercase hover:text-velmora-gold-dark">
          View All →
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
