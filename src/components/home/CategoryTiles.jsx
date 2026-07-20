import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="section-container py-20">
      <h2 className="font-serif text-3xl text-[#1c1917] md:text-4xl">Shop by Category</h2>
      <p className="mt-2 text-sm text-[#5c5650]">Find the perfect piece for every occasion.</p>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl"
          >
            <img src={category.image} alt={category.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-serif text-xl text-white md:text-2xl">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
