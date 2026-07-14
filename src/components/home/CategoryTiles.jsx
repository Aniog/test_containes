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
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.titleId}] [categories-section-title]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 transition-all duration-400 ${
        hovered
          ? 'bg-velmora-obsidian/50'
          : 'bg-gradient-to-t from-velmora-obsidian/60 via-velmora-obsidian/10 to-transparent'
      }`} />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        <h3
          id={cat.titleId}
          className="font-serif text-xl md:text-2xl uppercase tracking-widest text-velmora-cream"
        >
          {cat.label}
        </h3>
        <div className={`mt-3 font-sans text-[10px] tracking-widest uppercase text-velmora-gold border-b border-velmora-gold pb-0.5 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
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
    <section className="bg-velmora-linen py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">Browse</p>
          <h2 id="categories-section-title" className="font-serif text-4xl md:text-5xl font-light text-velmora-text-primary">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
