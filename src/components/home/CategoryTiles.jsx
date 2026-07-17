import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  {
    id: 'earrings',
    label: 'Earrings',
    href: '/shop?category=earrings',
    imgId: 'cat-tile-earrings',
    query: 'gold earrings collection warm lighting jewelry editorial',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    href: '/shop?category=necklaces',
    imgId: 'cat-tile-necklaces',
    query: 'gold necklaces collection warm lighting jewelry editorial',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    href: '/shop?category=huggies',
    imgId: 'cat-tile-huggies',
    query: 'gold huggie hoop earrings collection warm lighting jewelry',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory-50">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl text-velvet-950 mb-3">
            Shop by Category
          </h2>
          <p className="text-sm text-obsidian-muted max-w-md mx-auto">
            Find your perfect piece.
          </p>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={tile.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={tile.imgId}
                data-strk-img={tile.query}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velvet-950/30 group-hover:bg-velvet-950/50 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div>
                  <h3 className="text-heading text-2xl md:text-3xl text-ivory-50 mb-1">
                    {tile.label}
                  </h3>
                  <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-ivory-50/70 group-hover:text-gold-400 transition-colors duration-300">
                    Explore &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
