import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-bronze-900 tracking-wide mb-3">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] bg-bronze-100 overflow-hidden no-underline"
          >
            {/* Image placeholder */}
            <div className="absolute inset-0 bg-bronze-200 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
              <span className="text-sm tracking-[0.25em] uppercase text-bronze-400">
                {cat.name}
              </span>
            </div>

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-bronze-950/0 group-hover:bg-bronze-950/30 transition-all duration-500" />

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
