import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '../../data/products';

function CategoryTile({ cat }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="relative overflow-hidden group block"
      style={{ aspectRatio: '3/4' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}] fine gold jewelry`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 transition-all duration-400 ${hovered ? 'bg-obsidian/50' : 'bg-obsidian/25'}`} />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 text-center">
        <h3
          id={cat.titleId}
          className="font-serif text-2xl md:text-3xl font-light text-ivory tracking-wide mb-1"
        >
          {cat.label}
        </h3>
        <p
          id={cat.descId}
          className={`font-sans text-xs text-ivory/70 tracking-wide transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          {cat.description}
        </p>
        <div className={`mt-3 font-sans text-[10px] tracking-[0.2em] uppercase text-gold border-b border-gold pb-0.5 transition-all duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          Shop Now
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
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3 font-medium">
            Explore
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-obsidian">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
