import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24 border-t border-brand-line">
      <div className="container-narrow">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-2">Curated</p>
          <h2 className="section-title">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative h-72 md:h-96 overflow-hidden rounded-2xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-2xl text-white">{category.name}</h3>
                <span className="inline-block mt-2 text-xs font-semibold tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
                  Explore
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
