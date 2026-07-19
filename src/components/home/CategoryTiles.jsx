import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products.js';

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl uppercase tracking-widest">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] overflow-hidden group bg-subtle"
            >
              <img
                src={cat.image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-xl lg:text-2xl uppercase tracking-widest transition-opacity duration-300">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}