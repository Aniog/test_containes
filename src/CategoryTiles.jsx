import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from './data-products.js';

export default function CategoryTiles() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.2em] text-velmora-gold uppercase mb-3">Discover</p>
        <h2 className="font-serif text-3xl lg:text-4xl tracking-wide">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.slug}`}
            className="group relative aspect-[4/5] bg-velmora-sand overflow-hidden"
          >
            <img
              data-strk-img-id={`cat-tile-${cat.id}`}
              data-strk-img={`[cat-name-${cat.id}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <span
              id={`cat-name-${cat.id}`}
              className="absolute bottom-6 left-6 font-serif text-2xl text-white tracking-wider"
            >
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
