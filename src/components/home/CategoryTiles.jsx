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
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Default overlay */}
      <div className="absolute inset-0 bg-obsidian/30 transition-opacity duration-300 group-hover:opacity-0" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-obsidian/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
        <h3
          id={cat.titleId}
          className="font-serif text-2xl md:text-3xl font-light text-parchment uppercase tracking-widest text-center"
        >
          {cat.label}
        </h3>
        <p
          id={cat.descId}
          className="font-sans text-xs text-parchment/70 mt-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-[160px]"
        >
          {cat.description}
        </p>
        <span className="mt-4 font-sans text-[10px] font-medium uppercase tracking-widest text-gold border-b border-gold pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Shop Now
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
    <section ref={containerRef} className="bg-parchment py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
