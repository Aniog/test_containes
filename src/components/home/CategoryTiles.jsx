import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    imgId: 'cat-tile-earrings-p6q7r8',
    titleId: 'cat-earrings-title',
    descId: 'cat-earrings-desc',
    desc: 'Gold drop earrings and ear cuffs',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imgId: 'cat-tile-necklaces-s9t0u1',
    titleId: 'cat-necklaces-title',
    descId: 'cat-necklaces-desc',
    desc: 'Delicate gold chain necklaces with pendants',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imgId: 'cat-tile-huggies-v2w3x4',
    titleId: 'cat-huggies-title',
    descId: 'cat-huggies-desc',
    desc: 'Gold huggie hoop earrings',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-brand-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map(tile => (
            <Link
              key={tile.id}
              to={`/collection?category=${tile.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-brand-divider"
            >
              <img
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.descId}] [${tile.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={tile.titleId}
                  className="font-serif text-2xl md:text-3xl text-white"
                >
                  {tile.name}
                </h3>
                <p id={tile.descId} className="sr-only">{tile.desc}</p>
                <span className="mt-2 font-sans text-xs tracking-widest uppercase text-white/80 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
