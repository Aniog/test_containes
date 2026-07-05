import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

function CategoryTile({ cat }) {
  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="group relative overflow-hidden block"
      style={{ aspectRatio: '3/4' }}
    >
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.name}
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Base overlay */}
      <div className="absolute inset-0 bg-obsidian/40 transition-opacity duration-300 group-hover:opacity-60" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
        <div className="text-center transform transition-transform duration-300 group-hover:-translate-y-2">
          <p id={cat.titleId} className="font-serif text-2xl text-parchment font-light mb-1">
            {cat.name}
          </p>
          <p id={cat.descId} className="text-[9px] tracking-widest uppercase text-parchment/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {cat.description}
          </p>
          <div className="mt-3 w-8 h-px bg-gold mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
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
    <section ref={containerRef} className="py-20 lg:py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3 font-medium">Browse</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-parchment font-light">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
