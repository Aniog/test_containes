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
          <p className="text-xs tracking-[0.2em] text-[#6B6058] uppercase mb-2">Discover</p>
          <h2 className="serif text-3xl md:text-4xl tracking-[-0.01em]">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block text-sm tracking-wider hover:text-[#8C6F52]">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/shop" className="text-sm tracking-wider hover:text-[#8C6F52]">
          View All →
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
