import React from 'react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../lib/products';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0 text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl tracking-tight mb-2">The Essentials</h2>
          <p className="text-zinc-500 font-light tracking-wide uppercase-widest text-[10px]">Your favorite pieces, curated.</p>
        </div>
        <Link to="/shop" className="text-xs uppercase-widest tracking-widest border-b border-zinc-900 pb-1 hover:opacity-60 transition-opacity">
          Shop All
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
