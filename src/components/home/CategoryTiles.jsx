import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

function CategoryTile({ cat }) {
  return (
    <Link to={cat.href} className="group relative overflow-hidden aspect-[3/4] block bg-parchment">
      {/* Image */}
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

      {/* Label — always visible */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 text-center">
        <h3
          id={cat.titleId}
          className="font-cormorant text-2xl md:text-3xl font-light text-ivory uppercase tracking-[0.18em] mb-1"
        >
          {cat.label}
        </h3>
        <p
          id={cat.descId}
          className="font-inter text-[10px] uppercase tracking-[0.14em] text-ivory/60 group-hover:text-gold transition-colors duration-300"
        >
          {cat.description}
        </p>
        <div className="mt-4 w-6 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </Link>
  );
}

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-3">Browse</p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
