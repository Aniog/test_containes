import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.featured);

  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-velmora-gold mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-velmora-black">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/shop"
            className="inline-block border border-velmora-black text-velmora-black px-8 py-3 text-xs tracking-[0.15em] uppercase font-sans font-medium hover:bg-velmora-black hover:text-white transition-colors"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
