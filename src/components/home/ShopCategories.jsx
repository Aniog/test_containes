import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const ShopCategories = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-4">
            Shop by Category
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-[var(--color-bg-secondary)]"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/30 group-hover:bg-[var(--color-charcoal)]/40 transition-colors duration-300" />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-2xl md:text-3xl text-[var(--color-warm-white)] tracking-wider opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  {category.name}
                </span>
              </div>
              
              {/* Hover Label */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-sm text-[var(--color-warm-white)] tracking-widest uppercase border border-[var(--color-warm-white)] px-6 py-3">
                  Shop {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCategories;