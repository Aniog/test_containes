import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">Discover</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-espresso">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
      className="relative aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 bg-velmora-sand/30 transition-transform duration-700 group-hover:scale-105"
        data-strk-bg-id={`cat-bg-${category.id}`}
        data-strk-bg={`gold ${category.name} jewelry elegant closeup`}
        data-strk-bg-ratio="3x4"
        data-strk-bg-width="800"
      />
      <div className={`absolute inset-0 transition-colors duration-400 ${hovered ? 'bg-velmora-charcoal/40' : 'bg-velmora-charcoal/25'}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-velmora-ivory tracking-wide">
            {category.name}
          </h3>
          <span
            className={`inline-block mt-3 text-xs tracking-widest uppercase text-velmora-goldlight border-b border-velmora-goldlight pb-0.5 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            Explore
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryTiles;
