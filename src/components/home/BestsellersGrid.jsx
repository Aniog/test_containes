import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { bestsellers } from '../../data/products';

export default function BestsellersGrid() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="text-center mb-14 md:mb-20">
        <p className="text-velmora-gold text-xs font-sans tracking-[0.2em] uppercase mb-4">Most Loved</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-velmora-espresso mb-4">Bestsellers</h2>
        <p className="text-velmora-warm-gray text-sm max-w-md mx-auto">The pieces our customers reach for every single day.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {bestsellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/shop" className="btn-outline">
          View All Pieces
        </Link>
      </div>
    </section>
  );
}
