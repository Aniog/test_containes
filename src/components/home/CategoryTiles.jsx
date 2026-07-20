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
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-velmora-ink/30 group-hover:bg-velmora-ink/50 transition-colors duration-300" />
      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        <span id={cat.titleId} className="font-cormorant text-2xl md:text-3xl text-velmora-cream tracking-widest-sm font-light">
          {cat.label}
        </span>
        <span className="font-inter text-[10px] uppercase tracking-widest-lg text-velmora-gold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Shop Now
        </span>
      </div>
      <span id={cat.descId} className="sr-only">{cat.desc}</span>
    </Link>
  );
}

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="font-inter text-xs uppercase tracking-widest-lg text-velmora-gold mb-3">
            Browse
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-ink font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
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
