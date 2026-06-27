import React from 'react';
import { Link } from 'react-router-dom';

const tiles = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    to: '/shop?category=earrings',
    query: 'gold earrings collection editorial warm background jewelry',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    to: '/shop?category=necklaces',
    query: 'gold necklace collection editorial warm background jewelry',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    to: '/shop?category=huggies',
    query: 'gold huggie hoop earrings collection editorial warm background jewelry',
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Explore
          </p>
          <h2 className="section-title">Shop by Category</h2>
          <div className="hairline mx-auto mt-5" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.to}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={tile.id}
                data-strk-img={`[cat-label-${tile.id}] ${tile.query}`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div className="text-center">
                  <h3
                    id={`cat-label-${tile.id}`}
                    className="font-serif text-cream text-2xl md:text-3xl tracking-[0.08em] mb-2"
                  >
                    {tile.label}
                  </h3>
                  <span className="text-cream/70 text-[10px] tracking-[0.2em] uppercase border-b border-cream/40 pb-0.5">
                    Discover
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
