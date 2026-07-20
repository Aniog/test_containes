import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <CategoryTile key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryTile = ({ category }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="relative aspect-[4/5] overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={category.image}
        alt={category.label}
        className={`w-full h-full object-cover transition-transform duration-700 ${
          hovered ? 'scale-105' : 'scale-100'
        }`}
      />
      <div className={`absolute inset-0 transition-colors duration-500 ${
        hovered ? 'bg-black/30' : 'bg-black/10'
      }`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`font-serif text-2xl tracking-[0.2em] uppercase text-white transition-all duration-500 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {category.label}
        </span>
      </div>
    </Link>
  );
};

export default CategoryTiles;
