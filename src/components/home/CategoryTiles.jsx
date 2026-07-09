import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-[#faf8f5]">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl mb-3">Shop by Category</h2>
          <div className="w-12 h-px bg-[#c9a96e] mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="product-name text-2xl md:text-3xl mb-2 tracking-[0.2em]">
                    {category.name}
                  </h3>
                  <span className="text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white pb-1">
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
}
