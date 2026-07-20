import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-base">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-base"
            >
              <img
                src={`https://placehold.co/800x1000/1C1917/C5A059?text=${encodeURIComponent(
                  cat.name
                )}`}
                alt={cat.name}
                className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-base/30 transition-opacity duration-300 group-hover:bg-base/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.name}
                </h3>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block text-xs font-sans tracking-[0.15em] uppercase text-white/90 border-b border-white/40 pb-1 group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                  Shop {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
