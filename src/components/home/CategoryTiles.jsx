import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const categoryImages = {
  earrings: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80',
  necklaces: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80',
  huggies: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
};

const CategoryTiles = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-10">
        <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-2">Explore</p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Shop by Category</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${category.id}`}
            className="group relative aspect-[4/5] overflow-hidden bg-cream"
          >
            <img
              src={categoryImages[category.id]}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide">
                {category.name}
              </h3>
              <p className="mt-2 text-white/80 text-xs tracking-[0.18em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
