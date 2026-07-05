import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        <h3
          id={cat.titleId}
          className="font-serif text-2xl lg:text-3xl font-light text-ivory tracking-wide"
        >
          {cat.label}
        </h3>
        <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-gold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Shop Now →
        </span>
      </div>

      {/* Hidden desc */}
      <span id={cat.descId} className="sr-only">{cat.desc}</span>
    </Link>
  );
}

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-ivory py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-2">
            Explore
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-obsidian">
            Shop by Category
          </h2>
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
