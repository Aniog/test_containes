import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-3 tracking-wide">
            Shop by Category
          </h2>
          <p className="text-[#5c5c5c] max-w-xl mx-auto">
            Explore our curated collections of demi-fine jewelry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] bg-[#f5f5f0] rounded-lg overflow-hidden"
            >
              <img
                src={`https://placehold.co/600x800/f5f5f0/b8860b?text=${encodeURIComponent(category.name)}`}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-2 tracking-wider">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm max-w-xs">
                  {category.description}
                </p>
                <span className="mt-4 text-white text-sm font-medium tracking-wider uppercase border-b border-white/50 pb-0.5 group-hover:border-white transition-colors">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
