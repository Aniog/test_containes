import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const tiles = [
    { id: 'earrings', name: 'Earrings', slug: 'earrings', titleId: 'cat-tile-earrings-title' },
    { id: 'necklaces', name: 'Necklaces', slug: 'necklaces', titleId: 'cat-tile-necklaces-title' },
    { id: 'huggies', name: 'Huggies', slug: 'huggies', titleId: 'cat-tile-huggies-title' },
  ];

  return (
    <section ref={containerRef} className="py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[28px] md:text-[32px] tracking-[0.08em] uppercase text-text-primary">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map(tile => (
            <Link
              key={tile.id}
              to={`/shop?category=${tile.slug}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream"
            >
              <img
                data-strk-img-id={`cat-tile-${tile.id}-c7d8e9`}
                data-strk-img={`[${tile.titleId}] gold jewelry elegant`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                width="400"
                height="533"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={tile.titleId}
                  className="font-serif text-white text-[24px] md:text-[28px] tracking-[0.12em] uppercase"
                >
                  {tile.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
