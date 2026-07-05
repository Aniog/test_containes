import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-warm-300 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-tile-${cat.id}`}
                data-strk-bg={`${cat.name.toLowerCase()} gold jewelry editorial dark background`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-charcoal-950/30 group-hover:bg-charcoal-950/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-50 tracking-wide">{cat.name}</h3>
                <p className="mt-2 text-xs text-cream-200/80 tracking-[0.15em] uppercase">{cat.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
                <h3 className="font-serif text-xl text-cream-50 tracking-wide">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
