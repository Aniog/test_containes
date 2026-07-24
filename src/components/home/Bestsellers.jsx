import React from 'react';
import ProductCard from '../ui/ProductCard';
import { products } from '../../data/products';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 id="bestsellers-title" className="font-serif text-4xl md:text-5xl text-charcoal mb-4">The Bestsellers</h2>
            <p className="font-sans text-charcoal/60 text-sm md:text-md leading-relaxed">
              Discover the pieces our community loves most. Timeless designs crafted for every day and special occasions.
            </p>
          </div>
          <Link 
            to="/shop" 
            className="font-sans text-xs tracking-[0.3em] uppercase font-bold border-b-2 border-charcoal/10 pb-1 hover:text-gold hover:border-gold transition-all"
          >
            Explore All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6 md:gap-x-8">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
