import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { id: 'earrings', label: 'Earrings', href: '/shop?category=earrings' },
  { id: 'necklaces', label: 'Necklaces', href: '/shop?category=necklaces' },
  { id: 'huggies', label: 'Huggies', href: '/shop?category=huggies' },
];

export function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-porcelain py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
            Shop by Category
          </p>
          <h2 className="mt-3 font-serif text-3xl text-velmora-ink sm:text-4xl">
            Find Your Finish
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative aspect-[3/4] overflow-hidden bg-velmora-charcoal"
            >
              <img
                data-strk-img-id={`category-tile-${tile.id}`}
                data-strk-img={`[category-tile-label-${tile.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velmora-ink/20 transition-colors duration-500 group-hover:bg-velmora-ink/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-tile-label-${tile.id}`}
                  className="border border-white/60 bg-white/10 px-6 py-3 font-serif text-xl uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-500 group-hover:border-white group-hover:bg-white/20 sm:text-2xl"
                >
                  {tile.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
