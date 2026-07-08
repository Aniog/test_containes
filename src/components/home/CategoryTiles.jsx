import React from 'react';
import { Link } from 'react-router-dom';

const CategoryTiles = ({ categories }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl mb-4">Shop by Category</h2>
        <div className="w-16 h-px bg-gray-300 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to="/shop"
            className="relative group overflow-hidden cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Hover Overlay with Label */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white font-serif text-2xl md:text-3xl tracking-wider">
                {category.name}
              </h3>
            </div>
            
            {/* Static Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-6 py-2 md:hidden">
              <span className="text-sm tracking-wider">{category.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;