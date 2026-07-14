import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

function CategoryTile({ cat }) {
  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="group relative overflow-hidden aspect-[3/4] bg-velmora-linen block"
    >
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-velmora-obsidian/30 group-hover:bg-velmora-obsidian/50 transition-colors duration-300" />

      {/* Label — always visible */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 text-center">
        <h3 id={cat.titleId} className="font-cormorant text-3xl md:text-4xl text-velmora-cream tracking-wide">
          {cat.label}
        </h3>
        <p id={cat.descId} className="font-inter text-xs text-velmora-cream/70 mt-1 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {cat.description}
        </p>
        <span className="mt-3 font-inter text-[10px] uppercase tracking-widest text-velmora-gold border-b border-velmora-gold pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    <section className="section-padding bg-velmora-cream">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="label-ui text-velmora-gold mb-2">Browse by category</p>
          <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-obsidian">Shop the Edit</h2>
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
