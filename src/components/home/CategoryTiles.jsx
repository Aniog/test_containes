import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  return (
    <section className="section-padding container-padding">
      <div className="text-center mb-12">
        <h2 className="serif-heading text-3xl md:text-4xl mb-3">Shop by Category</h2>
        <div className="hairline-divider w-16 mx-auto mb-4" />
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
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="serif-heading text-2xl md:text-3xl tracking-wider mb-2">
                  {category.name}
                </h3>
                <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-b border-white pb-1">
                  Shop Now
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
