import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '../../data/products';

function CategoryTile({ cat }) {
  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="relative overflow-hidden group aspect-[3/4] block"
    >
      {/* Image */}
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hidden text for image query */}
      <span id={cat.titleId} className="hidden">{cat.label}</span>
      <span id={cat.descId} className="hidden">{cat.desc}</span>

      {/* Overlay */}
      <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-400" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3
            className="font-serif text-xl md:text-2xl font-light text-cream tracking-widest uppercase text-center"
          >
            {cat.label}
          </h3>
          <div className="w-8 h-px bg-gold mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="font-sans text-xs text-cream/70 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-wide">
            Shop Now
          </p>
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
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
