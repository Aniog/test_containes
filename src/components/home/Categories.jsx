import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const Categories = () => {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Browse by</p>
        <h2 className="mt-2 font-serif text-3xl text-ink md:text-4xl">Shop by Category</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative h-[320px] overflow-hidden rounded-2xl md:h-[420px]"
          >
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&q=80"
              alt={category.label}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/40" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <h3 className="font-serif text-2xl text-white md:text-3xl">{category.label}</h3>
              <p className="mt-1 text-sm text-white/80">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
