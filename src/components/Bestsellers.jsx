import React from 'react';
import { Link } from 'react-router-dom';
import { seedProducts } from '../data/products';
import ProductCard from './ProductCard';

const Bestsellers = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
          <div className="max-w-md">
            <h2 className="font-serif leading-none text-4xl md:text-5xl text-velmora-charcoal mb-4">
              Our Bestsellers
            </h2>
            <p className="text-velmora-charcoal/70">
              The pieces our community loves most. Crafted for everyday elegance.
            </p>
          </div>
          <Link to="/collections/bestsellers" className="hidden md:inline-block border-b border-velmora-charcoal uppercase tracking-widest text-sm pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors">
            Shop All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {seedProducts.filter(p => p.bestseller).slice(0, 5).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <Link to="/collections/bestsellers" className="inline-block border-b border-velmora-charcoal uppercase tracking-widest text-sm pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors">
              Shop All Bestsellers
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;