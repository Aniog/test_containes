import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings elegant' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace pendant elegant' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings minimal' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-bg-${cat.id}`}
                data-strk-bg={`[category-label-${cat.id}]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-base/30 group-hover:bg-base/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`category-label-${cat.id}`}
                  className="font-serif text-xl md:text-2xl text-white tracking-widest font-light uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {cat.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
