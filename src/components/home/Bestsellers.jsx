import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';

const Bestsellers = () => {
  const bestsellerProducts = products.slice(0, 5);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
            <p className="mt-2 text-stone-500">Our most-loved pieces</p>
          </div>
          <Link 
            to="/shop" 
            className="hidden md:inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors mt-4 md:mt-0"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 stagger-children">
          {bestsellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark transition-colors"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;