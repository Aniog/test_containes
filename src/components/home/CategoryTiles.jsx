import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  {
    id: 'category-earrings',
    name: 'Earrings',
    query: 'earrings',
    link: '/shop?category=Earrings',
  },
  {
    id: 'category-necklaces',
    name: 'Necklaces',
    query: 'necklaces',
    link: '/shop?category=Necklaces',
  },
  {
    id: 'category-huggies',
    name: 'Huggies',
    query: 'huggies',
    link: '/shop?category=Huggies',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28"
    >
      <div className="text-center mb-14 md:mb-18">
        <p className="section-subtitle mb-3">Curated For You</p>
        <h2 className="section-title">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {tiles.map((tile) => (
          <Link
            key={tile.id}
            to={tile.link}
            className="group relative aspect-[4/5] bg-[#F5EDDA] overflow-hidden"
          >
            <img
              data-strk-img-id={`${tile.id}-img`}
              data-strk-img={`[category-label-${tile.id}] gold demi-fine jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={tile.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                id={`category-label-${tile.id}`}
                className="font-serif text-2xl md:text-3xl tracking-[0.06em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg"
              >
                {tile.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
