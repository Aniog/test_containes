import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../shop/ProductCard';

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-velmora-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-heading-lg md:text-heading-xl text-velmora-deep">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
