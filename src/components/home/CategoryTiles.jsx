import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    label: 'Earrings',
    subtitle: 'Statement studs & drops',
    imgId: 'cat-earrings-tile',
    to: '/shop?category=earrings',
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    subtitle: 'Layer-worthy chains',
    imgId: 'cat-necklaces-tile',
    to: '/shop?category=necklaces',
  },
  {
    id: 'huggies',
    label: 'Huggies',
    subtitle: 'Everyday essentials',
    imgId: 'cat-huggies-tile',
    to: '/shop?category=huggies',
  },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-950 mb-3">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`${cat.label} gold jewelry collection closeup ${cat.subtitle}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/45 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="font-serif text-2xl md:text-3xl text-cream-50 tracking-wider mb-1 group-hover:tracking-[0.2em] transition-all duration-500">
                  {cat.label}
                </h3>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-cream-200/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
