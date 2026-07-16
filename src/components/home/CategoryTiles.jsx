import React from 'react';
import { Link } from 'react-router-dom';

const tiles = [
  {
    label: 'Earrings',
    to: '/shop?category=earrings',
    bgId: 'cat-earrings-bg',
    query: '[category-earrings-label] [category-shop-heading]',
  },
  {
    label: 'Necklaces',
    to: '/shop?category=necklaces',
    bgId: 'cat-necklaces-bg',
    query: '[category-necklaces-label] [category-shop-heading]',
  },
  {
    label: 'Huggies',
    to: '/shop?category=huggies',
    bgId: 'cat-huggies-bg',
    query: '[category-huggies-label] [category-shop-heading]',
  },
];

export default function CategoryTiles() {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="text-center mb-12 md:mb-14">
        <h2
          id="category-shop-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal font-light tracking-wide"
        >
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {tiles.map((tile) => (
          <Link
            key={tile.label}
            to={tile.to}
            className="relative aspect-[4/5] overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-strk-bg-id={tile.bgId}
              data-strk-bg={tile.query}
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/40 transition-colors duration-400" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`category-${tile.label.toLowerCase()}-label`}
                className="text-2xl md:text-3xl font-serif text-white tracking-wide"
              >
                {tile.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
