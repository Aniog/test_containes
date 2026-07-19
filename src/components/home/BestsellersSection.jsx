import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const BestsellersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-espresso">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;
