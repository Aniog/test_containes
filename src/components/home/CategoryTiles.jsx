import React from 'react';
import { Link } from 'react-router-dom';

const tiles = [
  { id: 'earrings', label: 'Earrings', sub: 'Studs, drops & cuffs' },
  { id: 'necklaces', label: 'Necklaces', sub: 'Chains, pendants & layers' },
  { id: 'huggies', label: 'Huggies', sub: 'Hoops that hug' },
];

export default function CategoryTiles() {
  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-velmora-gold text-xs tracking-[0.35em] uppercase font-medium mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.id}`}
              className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect fill="%233D322B" width="400" height="500"/><rect x="140" y="180" width="120" height="140" rx="60" fill="%23C9A96E" opacity="0.2"/><circle cx="200" cy="250" r="30" fill="%23C9A96E" opacity="0.15"/></svg>')`,
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-400" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="font-serif text-2xl md:text-3xl tracking-wide mb-1">
                  {tile.label}
                </h3>
                <p className="text-xs tracking-widest uppercase text-white/80 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  {tile.sub}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
