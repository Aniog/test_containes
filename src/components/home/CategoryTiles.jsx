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

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/50 transition-colors duration-300" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
        <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p
            id={cat.titleId}
            className="font-serif text-ivory text-2xl md:text-3xl font-light tracking-wide mb-2"
          >
            {cat.label}
          </p>
          <p
            id={cat.descId}
            className="text-ivory/70 text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {cat.description}
          </p>
          <div className="w-8 h-px bg-gold mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold text-xs tracking-ultra-wide uppercase font-medium mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
            Shop by Category
          </h2>
        </div>

        {/* Tiles grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
