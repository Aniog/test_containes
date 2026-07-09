import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { getBestsellers } from '../../data/products';

export default function Bestsellers() {
  const products = getBestsellers();

  return (
    <section className="section-padding bg-ivory-100">
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
            Curated Selection
          </p>
          <h2 className="font-serif text-display-sm md:text-display text-warm-900 mb-4">
            Bestsellers
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-y-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link to="/collection" className="btn-outline">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  );
}
