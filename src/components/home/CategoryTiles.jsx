import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  {
    id: 'cat-earrings',
    label: 'Earrings',
    to: '/shop/earrings',
    query: 'gold earrings editorial dark background warm lighting',
  },
  {
    id: 'cat-necklaces',
    label: 'Necklaces',
    to: '/shop/necklaces',
    query: 'gold chain necklace editorial dark background warm',
  },
  {
    id: 'cat-huggies',
    label: 'Huggies',
    to: '/shop/huggies',
    query: 'gold huggie hoop earrings editorial dark warm',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
      <div className="text-center mb-14">
        <h2 className="font-serif text-3xl md:text-4xl italic text-[#1A1514] tracking-wide">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            to={tile.to}
            className="group relative aspect-[4/5] bg-[#F5F0EB] overflow-hidden"
            onMouseEnter={() => setHovered(tile.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              alt={tile.label}
              data-strk-img-id={tile.id}
              data-strk-img={`[cat-label-${tile.id}] gold jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-500 ${
                hovered === tile.id ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span
                id={`cat-label-${tile.id}`}
                className="font-serif text-2xl md:text-3xl italic text-white tracking-wide"
              >
                {tile.label}
              </span>
            </div>
            {/* Default label at bottom */}
            <span className="absolute bottom-0 left-0 right-0 py-4 text-center font-serif text-lg tracking-[0.15em] uppercase text-white bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
              {tile.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
