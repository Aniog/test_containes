import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

function CategoryTile({ cat }) {
  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="group relative overflow-hidden block aspect-[3/4]"
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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/50 transition-colors duration-300" />

      {/* Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
        <p
          id={cat.titleId}
          className="font-serif text-2xl md:text-3xl font-light text-ivory tracking-[0.1em] uppercase"
        >
          {cat.label}
        </p>
        <span className="mt-3 font-sans text-[10px] uppercase tracking-[0.2em] text-ivory/0 group-hover:text-ivory/80 transition-colors duration-300 border-b border-ivory/0 group-hover:border-ivory/50 pb-0.5">
          Shop Now
        </span>
      </div>

      {/* Hidden desc for image query */}
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
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-espresso">
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
