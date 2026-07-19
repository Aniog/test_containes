import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans font-medium mb-3">
            Find Your Piece
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/shop"
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-[0.1em] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}