import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

function CategoryTile({ cat }) {
  return (
    <Link
      to={`/shop?category=${cat.id}`}
      className="group relative aspect-[3/4] overflow-hidden block bg-stone-pale"
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
      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500" />

      {/* Label — visible on hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
        <div className="transform transition-all duration-400 group-hover:-translate-y-2">
          <p
            id={cat.titleId}
            className="font-serif text-ivory text-xl lg:text-2xl uppercase tracking-widest text-center font-light"
          >
            {cat.label}
          </p>
          <p
            id={cat.descId}
            className="text-ivory/0 group-hover:text-ivory/80 text-xs font-sans text-center mt-2 transition-all duration-400 leading-relaxed"
          >
            {cat.description}
          </p>
          <div className="flex justify-center mt-3">
            <span className="text-[10px] uppercase tracking-widest font-sans text-ivory/0 group-hover:text-gold transition-all duration-400 border-b border-gold/0 group-hover:border-gold/60 pb-0.5">
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
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal font-light">
            Shop by Category
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map(cat => (
            <CategoryTile key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
