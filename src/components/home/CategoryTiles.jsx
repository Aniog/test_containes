import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 section-padding">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-brand-ink">Shop by Category</h2>
          <p className="text-brand-warmgray text-sm mt-3">Find the perfect piece for every moment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.name}`}
              className="group relative aspect-[4/5] overflow-hidden bg-brand-sand/20"
            >
              <img
                alt={`${cat.name} jewelry collection`}
                data-strk-img-id={`category-${cat.id}-img-8f2a`}
                data-strk-img={`[category-name-${cat.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-ink/20 group-hover:bg-brand-ink/40 transition-colors duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <span
                  id={`category-name-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl tracking-widest text-white font-light"
                >
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
