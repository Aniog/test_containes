import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { label: 'Earrings', to: '/shop/earrings', imgId: 'cat-earrings-d4e5f6', desc: 'Sculptural studs, hoops & drops' },
  { label: 'Necklaces', to: '/shop/necklaces', imgId: 'cat-necklaces-g7h8i9', desc: 'Pendants & chains to layer' },
  { label: 'Huggies', to: '/shop/huggies', imgId: 'cat-huggies-j0k1l2', desc: 'The everyday essential' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="text-center mb-14">
        <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)]">Explore</span>
        <h2 className="font-[var(--font-serif)] text-3xl md:text-4xl mt-3 font-semibold">Shop by Category</h2>
        <div className="w-12 h-px bg-[var(--color-accent)] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tiles.map((tile) => (
          <Link key={tile.label} to={tile.to} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-[var(--color-surface-alt)]">
            <img
              data-strk-img-id={tile.imgId}
              data-strk-img={`[cat-desc-${tile.label.toLowerCase()}] [cat-label-${tile.label.toLowerCase()}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={tile.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 id={`cat-label-${tile.label.toLowerCase()}`} className="font-[var(--font-serif)] text-2xl md:text-3xl font-semibold tracking-wide">
                {tile.label}
              </h3>
              <p id={`cat-desc-${tile.label.toLowerCase()}`} className="text-sm text-white/60 mt-2 font-light">
                {tile.desc}
              </p>
              <span className="mt-5 px-6 py-2 border border-white/50 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Explore
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
