import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product/ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Show first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] mb-2">Discover</p>
          <h2 className="heading-serif text-3xl md:text-4xl">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block text-sm tracking-[0.1em] uppercase hover:text-[#8C6F4E] transition-colors">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link to="/shop" className="text-sm tracking-[0.1em] uppercase hover:text-[#8C6F4E] transition-colors">
          View All →
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;
