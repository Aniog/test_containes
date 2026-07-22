import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryTiles = [
  { id: 'earrings', name: 'Earrings', query: 'gold earrings jewelry woman' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace pendant woman' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie hoop earrings' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="velmora-heading text-3xl md:text-4xl text-center mb-12">Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              <div
                data-strk-bg-id={`cat-bg-${cat.id}`}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="velmora-product-name text-white text-xl md:text-2xl tracking-[0.2em] opacity-90 group-hover:opacity-100 transition-opacity">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
