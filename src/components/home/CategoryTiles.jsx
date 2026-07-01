import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-base font-light tracking-wide mb-3">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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
              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-base/30 group-hover:bg-velmora-base/50 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    {category.name}
                  </h3>
                  <span className="text-white/80 text-xs tracking-ultra-wide uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore
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
