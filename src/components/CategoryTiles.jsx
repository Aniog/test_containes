import React from 'react';
import { categories } from '../data/products';
import { Link } from 'react-router-dom';

export default function CategoryTiles() {
  return (
    <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl font-light mb-4">Shop by Category</h2>
        <div className="w-16 h-px bg-[#C9A96E] mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="relative h-80 overflow-hidden group cursor-pointer"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <h3 className="font-serif text-3xl text-white uppercase tracking-wider">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
