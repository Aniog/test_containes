import React from 'react';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';

const Bestsellers = () => {
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 5);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl text-base mb-4">Bestsellers</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-base/60 max-w-xl mx-auto">
            Our most-loved pieces, chosen by you. Timeless designs that become part of your story.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-14">
          <a
            href="/shop"
            className="inline-block px-8 py-3 border border-base/20 text-sm tracking-widest uppercase text-base hover:border-gold hover:text-gold transition-all duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;