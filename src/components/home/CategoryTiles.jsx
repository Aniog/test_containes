import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    query: 'gold earrings drop stud demi-fine jewelry editorial dark background',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    query: 'gold necklace chain pendant demi-fine jewelry editorial dark background',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    query: 'gold huggie hoop earrings ear stack demi-fine jewelry editorial dark background',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-14 sm:py-20 bg-cream-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-medium tracking-superwide uppercase text-gold-600 mb-2">
            Browse
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink-900">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <CategoryTile key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryTile({ category }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${category.id}`}
      className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-sm group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        data-strk-img-id={`cat-${category.id}`}
        data-strk-img={category.query}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={category.label}
        className={`h-full w-full object-cover transition-transform duration-700 ${
          hovered ? 'scale-105' : 'scale-100'
        }`}
      />
      <div className="absolute inset-0 bg-ink-950/30 group-hover:bg-ink-950/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-serif text-xl sm:text-2xl text-white tracking-widest uppercase transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-0'
          }`}
        >
          {category.label}
        </span>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 flex justify-center transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <span className="text-xs font-medium tracking-widest uppercase text-white underline underline-offset-4">
          Shop Now
        </span>
      </div>
    </Link>
  );
}
