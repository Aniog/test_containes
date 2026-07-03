import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const Categories = () => {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-ultra text-accent">Curated</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">Shop by category</h2>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.href}
            className="group relative h-[320px] md:h-[380px] overflow-hidden rounded-2xl bg-[#1c1917]"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity group-hover:opacity-90" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-serif text-2xl text-white">{category.name}</p>
              <span className="mt-2 inline-flex items-center text-xs font-semibold uppercase tracking-ultra text-white/80 transition-colors group-hover:text-white">
                Shop now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
