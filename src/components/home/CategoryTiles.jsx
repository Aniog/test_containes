import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const cats = [
  { id: 'earrings', name: 'Earrings', titleId: 'cat-earrings-title' },
  { id: 'necklaces', name: 'Necklaces', titleId: 'cat-necklaces-title' },
  { id: 'huggies', name: 'Huggies', titleId: 'cat-huggies-title' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-heading">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {cats.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] bg-ivory overflow-hidden no-underline"
            >
              <div
                data-strk-bg-id={`cat-tile-${cat.id}-bg-8d2f`}
                data-strk-bg={`[${cat.titleId}] gold jewelry`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="600"
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide"
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
