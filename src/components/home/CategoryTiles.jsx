import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  {
    label: 'Earrings',
    href: '/shop?category=earrings',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop',
  },
  {
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&h=800&fit=crop',
  },
  {
    label: 'Huggies',
    href: '/shop?category=huggies',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=800&fit=crop',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-text-secondary mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map(cat => (
            <CategoryTile key={cat.label} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ label, href, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={href}
      className="relative aspect-[3/4] overflow-hidden group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={image}
        alt={label}
        className={`w-full h-full object-cover transition-transform duration-700 ${
          hovered ? 'scale-105' : 'scale-100'
        }`}
      />
      <div
        className={`absolute inset-0 bg-deep/30 transition-opacity duration-500 ${
          hovered ? 'opacity-50' : 'opacity-30'
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-serif text-xl md:text-2xl text-text-on-dark tracking-widest uppercase transition-all duration-500 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
          }`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
}
