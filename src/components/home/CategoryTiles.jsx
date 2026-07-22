import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="section-subtitle">Explore</p>
        <h2 className="section-title mt-2">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {categories.map(category => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative h-72 sm:h-96 overflow-hidden rounded-sm"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-2xl text-white transition-transform duration-500 group-hover:scale-105">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
