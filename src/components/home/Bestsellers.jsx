import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  // Use first 5 products as bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="uppercase tracking-[0.15em] text-xs text-[#6B645C] mb-2">Signature Pieces</p>
          <h2 className="font-serif text-4xl tracking-[0.05em]">Bestsellers</h2>
        </div>
        <Link to="/shop" className="hidden md:block text-sm uppercase tracking-[0.1em] hover:text-[#B89778]">
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-10 md:hidden">
        <Link to="/shop" className="text-sm uppercase tracking-[0.1em] hover:text-[#B89778]">
          View All →
        </Link>
      </div>
    </section>
  );
};

export default Bestsellers;