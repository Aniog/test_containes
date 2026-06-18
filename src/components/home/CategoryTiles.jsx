import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

function CategoryTile({ cat }) {
  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="group relative overflow-hidden block aspect-[3/4] bg-linen"
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

      {/* Default overlay */}
      <div className="absolute inset-0 transition-colors duration-300" style={{backgroundColor: 'rgba(26,23,20,0.2)'}} onMouseEnter={e => e.currentTarget.style.backgroundColor='rgba(26,23,20,0.45)'} onMouseLeave={e => e.currentTarget.style.backgroundColor='rgba(26,23,20,0.2)'} />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
        <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3
            id={cat.titleId}
            className="font-cormorant text-2xl md:text-3xl font-light text-ivory tracking-wide mb-1"
          >
            {cat.label}
          </h3>
          <p
            id={cat.descId}
            className="font-manrope text-xs text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {cat.description}
          </p>
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-manrope text-[10px] tracking-[0.14em] uppercase text-gold border-b border-gold pb-0.5">
              Shop Now
            </span>
          </div>
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
          <p className="font-manrope text-xs tracking-[0.15em] uppercase text-gold mb-2">
            Explore
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide">
            Shop by Category
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
