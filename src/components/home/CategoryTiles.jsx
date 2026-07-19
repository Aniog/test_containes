import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const tileData = [
  { id: 'earrings', name: 'Earrings', query: 'elegant gold earrings on woman editorial warm lighting' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold pendant necklace on model décolletage editorial' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie earrings close up on ear warm skin tone' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-xs tracking-super uppercase text-sand-600 font-medium mb-3">Shop By</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {tileData.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop/${tile.id}`}
              className="group relative aspect-[4/5] bg-velvet-200 overflow-hidden cursor-pointer"
            >
              <img
                alt={tile.name}
                data-strk-img-id={`cat-${tile.id}`}
                data-strk-img={tile.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-velvet-950/30 group-hover:bg-velvet-950/45 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-white text-2xl md:text-3xl tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">
                  {tile.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
