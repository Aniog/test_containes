import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Curated ear artistry',
    to: '/shop/earrings',
    ratio: '4x3',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Adorn the décolletage',
    to: '/shop/necklaces',
    ratio: '4x3',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Everyday gold essentials',
    to: '/shop/huggies',
    ratio: '4x3',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-velvet-card">
      <div className="container-wide">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-base mb-3">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {tiles.map((tile) => (
            <Link key={tile.id} to={tile.to} className="group relative overflow-hidden block">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  data-strk-img-id={`cat-tile-${tile.id}`}
                  data-strk-img={`[cat-desc-${tile.id}] [cat-name-${tile.id}] gold jewelry`}
                  data-strk-img-ratio={tile.ratio}
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                  alt={tile.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-velvet-base/0 group-hover:bg-velvet-base/30 transition-all duration-500 flex items-center justify-center">
                <div className="text-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p id={`cat-name-${tile.id}`} className="font-serif text-white text-2xl tracking-wider">{tile.name}</p>
                  <p id={`cat-desc-${tile.id}`} className="text-white/70 text-sm mt-1">{tile.description}</p>
                </div>
              </div>
              {/* Label at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velvet-base/70 to-transparent pt-16 pb-5 px-5 group-hover:opacity-0 transition-opacity duration-500">
                <p className="font-serif text-white text-lg tracking-wider">{tile.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
