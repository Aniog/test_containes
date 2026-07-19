import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="bg-brand-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">Explore</p>
          <h2 id="category-section-title" className="font-serif text-3xl md:text-4xl text-brand-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative h-72 overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.titleId}] [category-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                alt={category.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span id={category.titleId} className="font-serif text-2xl text-white tracking-wide">{category.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
