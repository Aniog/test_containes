import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const Categories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <h2 className="section-title">Shop by Category</h2>
        <p className="section-subtitle mx-auto">Find the perfect piece for every occasion.</p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative h-72 overflow-hidden rounded-2xl md:h-96"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-velmora group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-950/60 via-base-950/20 to-transparent transition-opacity duration-500 group-hover:from-base-950/70" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-serif text-2xl font-medium text-white md:text-3xl">{category.name}</h3>
              <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-widest text-gold-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Explore
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
