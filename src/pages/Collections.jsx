import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function Collections() {
  return (
    <div className="pt-20 lg:pt-24 bg-cream min-h-screen">
      <div className="max-w-content mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-text-primary">Collections</h1>
          <p className="font-sans text-sm text-text-secondary mt-3 max-w-md mx-auto">
            Curated collections designed to elevate your everyday style.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-hairline"
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="font-serif text-3xl text-white tracking-wide">{cat.name}</h2>
              </div>
            </Link>
          ))}
          <Link
            to="/shop"
            className="group relative aspect-[4/5] overflow-hidden bg-base-dark"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="font-serif text-3xl text-white tracking-wide">Shop All</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
