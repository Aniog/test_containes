import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">
            Shop by Category
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg mx-auto">
            Explore our curated collections of demi-fine jewelry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              {/* Image background */}
              <div
                className="absolute inset-0 bg-charcoal transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${category.id}-bg`}
                data-strk-bg={`[category-${category.id}-name] [category-${category.id}-desc]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3
                  id={`category-${category.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-[0.1em] mb-2"
                >
                  {category.name}
                </h3>
                <p
                  id={`category-${category.id}-desc`}
                  className="text-white/70 text-xs md:text-sm tracking-wider uppercase"
                >
                  {category.description}
                </p>
                <span className="mt-6 text-[10px] tracking-[0.2em] uppercase text-white border-b border-white/50 pb-1 group-hover:border-gold group-hover:text-gold transition-colors">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
