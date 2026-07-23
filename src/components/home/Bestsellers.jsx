import React from 'react';
import { products } from '@/lib/data';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/ui/ProductCard';

const Bestsellers = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4 block">Most Loved</span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight">The Bestsellers</h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-all">
            View All Jewelry
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
