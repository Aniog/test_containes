import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '@/lib/data';
import ProductCard from '@/components/products/ProductCard';
import { ChevronRight } from 'lucide-react';

const Bestsellers = () => {
  const bestsellers = PRODUCTS.slice(0, 5);

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 id="bestsellers-title" className="text-3xl md:text-5xl font-serif tracking-tight mb-4">The Bestsellers</h2>
            <p className="text-stone-500 uppercase tracking-widest text-[10px] md:text-xs">Timeless pieces loved by our community</p>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 hover:text-accent transition-colors">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Shop All</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-12">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
