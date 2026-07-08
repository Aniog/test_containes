import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-brand-accent mb-3">Curated For You</p>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-ink">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="relative aspect-[4/5] overflow-hidden rounded-sm group"
              onMouseEnter={() => setHovered(category.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-sm md:text-base tracking-widest uppercase border border-white/80 px-6 py-2.5 group-hover:bg-white group-hover:text-brand-ink transition-colors duration-300">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
