import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[4/5] bg-velmora-warm overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-velmora-sand font-serif text-6xl opacity-30">{cat.name[0]}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="px-8 py-3 border border-white text-white text-xs font-semibold tracking-widest uppercase">
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 md:opacity-100 group-hover:opacity-0 transition-opacity duration-400">
                <h3 className="font-serif text-2xl text-velmora-charcoal">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
