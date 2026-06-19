import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="velmora-section bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="velmora-heading text-3xl md:text-4xl text-[#1a1a1a] mb-4">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-[#f5f0eb]"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-label-${cat.id}] [shop-category-title]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`category-label-${cat.id}`}
                  className="velmora-product-name text-xl md:text-2xl text-[#faf8f5] tracking-widest"
                >
                  {cat.name}
                </h3>
                <span className="text-xs text-[#faf8f5]/70 mt-2 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
