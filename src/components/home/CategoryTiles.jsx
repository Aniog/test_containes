import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding py-20 md:py-28 max-w-[1440px] mx-auto">
      <div className="text-center mb-12">
        <p className="section-subtitle mb-3">Browse By Style</p>
        <h2 className="section-title">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/collection?category=${cat.id}`}
            className="group relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-surface-2 transition-transform duration-700 group-hover:scale-105"
              data-strk-bg-id={`cat-tile-${cat.id}-bg-d4e5f6`}
              data-strk-bg={`[${cat.id}-cat-name] jewelry gold luxury`}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-base/40 group-hover:bg-base/30 transition-colors duration-500" />

            {/* Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3
                className="font-serif text-3xl md:text-4xl text-cream tracking-wide mb-2"
                id={`${cat.id}-cat-name`}
              >
                {cat.name}
              </h3>
              <span className="text-xs tracking-ultra-wide uppercase text-cream/70 group-hover:text-gold transition-colors duration-300">
                {cat.count} {cat.count === 1 ? 'piece' : 'pieces'}
              </span>
              <div className="mt-4 w-8 h-px bg-gold/50 group-hover:w-12 transition-all duration-400" />
            </div>

            {/* Border */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-gold/30 transition-all duration-400 rounded-sm" />
          </Link>
        ))}
      </div>
    </section>
  );
}
