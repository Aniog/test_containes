import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const Categories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="font-serif text-3xl text-brand-ink">Shop by category</h2>
      <p className="mt-2 text-sm text-brand-muted">Find the perfect piece for every moment.</p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative aspect-[4/5] rounded-xl overflow-hidden"
          >
            <img src={category.image} alt={category.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-serif text-xl text-white">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
