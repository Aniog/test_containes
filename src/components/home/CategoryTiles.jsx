import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-3">Explore</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Shop by Category</h2>
          <div className="w-16 h-px bg-[#b8860b] mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-[0.15em] uppercase mb-4">
                  {cat.name}
                </h3>
                <span className="text-white/80 text-xs tracking-[0.2em] uppercase border-b border-white/60 pb-1 group-hover:border-white transition-colors">
                  Discover
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
