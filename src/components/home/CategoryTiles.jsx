import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-widest3 uppercase text-accent mb-3">Shop By</p>
        <h2 className="font-serif text-3xl lg:text-4xl text-deep-900 font-light">Category</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] bg-sand/50 rounded-sm overflow-hidden"
          >
            {/* Placeholder */}
            <div className="absolute inset-0 bg-warm-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
              <span className="text-warm-500 text-xs tracking-wider">{cat.name.toUpperCase()}</span>
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-deep-950/0 group-hover:bg-deep-950/30 transition-colors duration-500" />
            {/* Label */}
            <div className="absolute inset-x-0 bottom-8 text-center">
              <span className="inline-block font-serif text-2xl text-cream tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0 transform">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
