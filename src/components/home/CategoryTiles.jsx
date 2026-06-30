import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

function CategoryTile({ cat }) {
  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="group relative overflow-hidden aspect-[3/4] block bg-velmora-linen"
    >
      <img
        data-strk-img-id={cat.imgId}
        data-strk-img={`[${cat.descId}] [${cat.titleId}] gold jewelry`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={cat.label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-velmora-obsidian/20 group-hover:bg-velmora-obsidian/40 transition-colors duration-300" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3
            id={cat.titleId}
            className="font-cormorant text-2xl md:text-3xl font-light text-velmora-ivory uppercase tracking-widest text-center"
          >
            {cat.label}
          </h3>
          <div className="flex justify-center mt-3 overflow-hidden">
            <span className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
              Shop Now <span>→</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hidden desc */}
      <span id={cat.descId} className="hidden">{cat.label} jewelry collection</span>
    </Link>
  );
}

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne mb-3">
            Browse by Category
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
            Shop the Edit
          </h2>
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
