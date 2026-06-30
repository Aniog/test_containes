import React from 'react';
import { Link } from 'react-router-dom';
import { shopCategories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28">
      <div className="text-center mb-14 md:mb-20">
        <p className="text-velmora-gold text-xs font-sans tracking-[0.2em] uppercase mb-4">Discover</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-velmora-espresso mb-4">
          Shop by Category
        </h2>
        <p className="text-velmora-warm-gray text-sm max-w-md mx-auto">Find your perfect piece.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {shopCategories.map((cat, i) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] bg-velmora-stone overflow-hidden"
          >
            <img
              alt={cat.name}
              data-strk-img-id={`category-tile-${cat.id}`}
              data-strk-img={`[cat-name-${cat.id}] gold jewelry flat lay`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-400 group-hover:bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h3
                id={`cat-name-${cat.id}`}
                className="font-serif text-3xl md:text-4xl text-white font-medium tracking-wider transition-transform duration-400 group-hover:-translate-y-1"
              >
                {cat.name}
              </h3>
              <p className="text-white/60 text-xs font-sans tracking-widest uppercase mt-3 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
