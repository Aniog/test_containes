import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/products/ProductCard';
import { getBestsellers } from '@/data/products';

const BestsellersSection = () => {
  const bestsellers = getBestsellers();

  return (
    <section className="py-20 md:py-28">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold mb-4">
            Customer Favorites
          </p>
          <h2 className="section-heading">Bestsellers</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold transition-colors group"
          >
            View All Products
            <span className="w-8 h-px bg-current transform origin-left transition-transform duration-300 group-hover:scale-x-150" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
