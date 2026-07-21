import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">Find Your Style</p>
          <h2 className="section-title mt-2">Shop by Category</h2>
          <div className="w-12 h-0.5 bg-brand-500/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-midnight-950/0 group-hover:bg-midnight-950/40 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-2xl md:text-3xl text-cream-50 font-light tracking-wide">
                    {category.name}
                  </h3>
                  <p className="text-cream-200/70 text-xs md:text-sm mt-1 font-sans tracking-wider uppercase">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}