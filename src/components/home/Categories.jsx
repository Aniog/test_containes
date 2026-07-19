import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const Categories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-brand-ink text-center">Shop by Category</h2>
      <p className="mt-2 text-sm text-brand-muted text-center">Find the perfect piece for every occasion.</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map(category => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-md"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80';
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center pb-6">
              <span className="rounded-full border border-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm group-hover:bg-white group-hover:text-brand-ink transition-colors">
                {category.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
