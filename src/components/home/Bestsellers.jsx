import React from 'react';
import ProductCard from '@/components/common/ProductCard';
import { PRODUCTS } from '@/lib/data';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const bestsellers = PRODUCTS.slice(0, 5);

  return (
    <section className="py-24 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4 font-bold">The Essentials</h2>
          <h3 className="text-4xl md:text-5xl font-serif leading-tight">Most Loved Pieces</h3>
        </div>
        <Link to="/shop" className="text-xs uppercase tracking-[0.2em] border-b border-primary pb-1 font-bold hover:text-accent hover:border-accent transition-all duration-300">
          View All Collection
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Bestsellers;
