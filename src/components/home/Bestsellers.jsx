import React from 'react';
import ProductCard from '../ui/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-velmora-gold mb-2 block font-bold">Curated Selection</span>
            <h2 className="text-3xl md:text-5xl font-serif text-velmora-obsidian">Current Bestsellers</h2>
          </div>
          <a href="/shop" className="text-xs uppercase tracking-widest text-neutral-400 hover:text-velmora-obsidian transition-colors border-b border-transparent hover:border-velmora-obsidian pb-1 font-bold">
            View All Jewelry
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {products.slice(0, 5).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
