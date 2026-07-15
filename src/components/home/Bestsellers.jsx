import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '@/components/shop/ProductCard';
import { products } from '@/lib/data';

const Bestsellers = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            Bestsellers
          </h2>
          <p className="mt-3 text-sm text-brand-muted">Our most-loved pieces, chosen by you</p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wide-xl uppercase font-medium hover:bg-brand-charcoal hover:text-white transition-colors rounded-sm"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
