import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    imgId: 'cat-earrings-tile-s9t0u1',
    titleId: 'cat-earrings-title',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imgId: 'cat-necklaces-tile-v2w3x4',
    titleId: 'cat-necklaces-title',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imgId: 'cat-huggies-tile-y5z6a7',
    titleId: 'cat-huggies-title',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] bg-charcoal overflow-hidden"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                data-strk-bg-id={cat.imgId}
                data-strk-bg={`[${cat.titleId}] gold jewelry`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
              />
              <div className="absolute inset-0 group-hover:opacity-60 transition-opacity duration-300" style={{ backgroundColor: 'rgba(26,26,26,0.3)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl tracking-wide"
                  style={{ color: '#FAF7F2', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
