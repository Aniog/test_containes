import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const Categories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.name}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <img src={category.image} alt={category.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
            <div className="absolute inset-x-0 bottom-0 flex items-end p-6">
              <span className="font-serif text-2xl text-white transition-transform duration-300 group-hover:-translate-y-1">
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
