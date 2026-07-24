import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <p className="eyebrow">Browse by style</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Shop by category</h2>
      </div>

      <div className="section-container mt-10 grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/60" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-2xl font-semibold text-white md:text-3xl">
                {category.name}
              </p>
              <p className="mt-1 font-ui text-sm text-white/80">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
