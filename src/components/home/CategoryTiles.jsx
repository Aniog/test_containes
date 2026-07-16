import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
            Explore
          </p>
          <h2 className="section-title">Shop by Category</h2>
          <div className="divider mt-4" />
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-wide mb-2">
                  {category.name}
                </h3>
                <p className="font-sans text-sm text-cream-200 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <div className="w-8 h-px bg-gold-400 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
