import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tiles = [
  { id: 'earrings', name: 'Earrings', titleId: 'cat-tile-earrings-title', imgId: 'cat-tile-earrings-x1y2z3' },
  { id: 'necklaces', name: 'Necklaces', titleId: 'cat-tile-necklaces-title', imgId: 'cat-tile-necklaces-a4b5c6' },
  { id: 'huggies', name: 'Huggies', titleId: 'cat-tile-huggies-title', imgId: 'cat-tile-huggies-d7e8f9' },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tiles.map((tile) => (
            <Link
              key={tile.id}
              to={`/collection?category=${tile.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted no-underline"
            >
              <img
                data-strk-img-id={tile.imgId}
                data-strk-img={`[${tile.titleId}] gold jewelry elegant`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={tile.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={tile.titleId}
                  className="font-serif text-2xl md:text-3xl text-cream tracking-wide"
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
};

export default CategoryTiles;
