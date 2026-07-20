import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { products } from '@/data';

const Bestsellers = () => {
  // Take first 5 products for bestsellers
  const bestsellers = products.slice(0, 5);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif tracking-widest uppercase mb-3">Bestsellers</h2>
            <p className="text-muted text-sm">Most loved pieces by our community.</p>
          </div>
          <Link 
            to="/collections/bestsellers" 
            className="hidden md:inline-block text-sm font-medium tracking-widest uppercase border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            View All
          </Link>
        </div>

        {/* Scrollable container for mobile, grid for desktop */}
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 gap-6 no-scrollbar snap-x">
          {bestsellers.map((product) => (
            <div key={product.id} className="min-w-[280px] lg:min-w-0 snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/collections/bestsellers" 
            className="inline-block text-sm font-medium tracking-widest uppercase border-b border-foreground pb-1"
          >
            View All Bestsellers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
