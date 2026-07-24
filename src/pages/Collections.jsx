import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function Collections() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Curated</p>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-espresso tracking-wide mb-4">
            Collections
          </h1>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-warmgray overflow-hidden"
            >
              <img
                alt={cat.name}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 id={`collections-name-${cat.id}`} className="font-serif text-2xl md:text-3xl font-light text-cream tracking-wide">
                  {cat.name}
                </h3>
                <p id={`collections-desc-${cat.id}`} className="text-cream/70 text-xs tracking-[0.15em] uppercase mt-2">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}