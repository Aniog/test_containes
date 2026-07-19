import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="py-16 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl text-center text-[#3d3229] mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${category.id}`}
                data-strk-bg={`[category-${category.id}-name] [category-${category.id}-description]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                style={{ backgroundColor: '#3d3229' }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 id={`category-${category.id}-name`} className="font-serif text-xl md:text-2xl text-white tracking-widest">
                  {category.name}
                </h3>
                <p id={`category-${category.id}-description`} className="mt-2 text-xs text-white/80 tracking-wide">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
