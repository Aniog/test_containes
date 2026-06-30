import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink text-center mb-10">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-base-100"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent transition-opacity group-hover:from-ink/70" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-2xl font-semibold text-cream tracking-wide">
                  {category.name}
                </h3>
                <span className="mt-2 inline-flex items-center text-sm font-medium text-gold-300 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Explore
                  <span aria-hidden="true" className="ml-1">→</span>
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
