import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

const CategoryTiles = () => {
  return (
    <section className="section-padding bg-[var(--color-warm-white)]">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">Explore</p>
          <h2 className="serif-heading text-4xl md:text-5xl mb-4">Shop by Category</h2>
          <div className="w-16 h-px bg-[var(--color-gold)] mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="serif-heading text-3xl md:text-4xl mb-2 tracking-wider">{category.name}</h3>
                  <span className="text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white pb-1">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
