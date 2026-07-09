import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { id: 'cat-earrings', label: 'Earrings', to: '/shop/earrings', titleId: 'cat-title-earrings' },
  { id: 'cat-necklaces', label: 'Necklaces', to: '/shop/necklaces', titleId: 'cat-title-necklaces' },
  { id: 'cat-huggies', label: 'Huggies', to: '/shop/huggies', titleId: 'cat-title-huggies' },
];

export default function CategoryTiles() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-5 md:px-10 py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <p className="section-subtitle">Curated For You</p>
        <h2 className="section-title mt-2">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            to={tile.to}
            className="group relative aspect-[4/5] bg-velmora-sand rounded-sm overflow-hidden"
          >
            <img
              alt={tile.label}
              data-strk-img-id={`cat-tile-${tile.id}`}
              data-strk-img={`[${tile.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={tile.titleId}
                className="font-serif text-2xl md:text-3xl font-semibold text-white tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {tile.label}
              </span>
            </div>
            {/* Label below on mobile, overlay on hover desktop */}
            <span className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-3 text-center font-serif text-lg font-semibold tracking-wider text-velmora-charcoal md:hidden">
              {tile.label}
            </span>
            <span className="absolute bottom-4 left-4 font-sans text-xs tracking-widest uppercase text-white/80 hidden md:block group-hover:opacity-0 transition-opacity duration-300">
              {tile.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}