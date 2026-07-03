import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

function CategoryTile({ cat }) {
  return (
    <Link to={`/shop?category=${cat.id}`} className="group relative overflow-hidden block aspect-[3/4]">
      {/* Background image */}
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

      {/* Hidden desc */}
      <span id={cat.descId} className="hidden">{cat.desc}</span>

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        <div className="w-8 h-px bg-champagne mb-4 transition-all duration-300 group-hover:w-12" />
        <h3
          id={cat.titleId}
          className="font-cormorant text-2xl md:text-3xl font-light text-ivory uppercase tracking-[0.15em]"
        >
          {cat.label}
        </h3>
        <span className="font-manrope text-[10px] uppercase tracking-widest text-ivory/0 group-hover:text-ivory/70 transition-all duration-300 mt-2">
          Shop Now →
        </span>
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
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-manrope text-xs uppercase tracking-widest text-champagne mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            Shop by Category
          </h2>
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
