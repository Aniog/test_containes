import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    path: '/shop?category=earrings',
    imgId: 'category-earrings-tile',
    titleId: 'category-earrings-title',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    path: '/shop?category=necklaces',
    imgId: 'category-necklaces-tile',
    titleId: 'category-necklaces-title',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    path: '/shop?category=huggies',
    imgId: 'category-huggies-tile',
    titleId: 'category-huggies-title',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-wide-custom uppercase text-gold mb-3">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Shop by Category
          </h2>
        </div>

        {/* Category grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.path}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden"
            >
              <img
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.titleId}] gold jewelry collection`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              {/* Label */}
              <div className="absolute inset-0 flex items-end p-6 md:p-8">
                <div>
                  <h3
                    id={category.titleId}
                    className="font-serif text-2xl md:text-3xl text-white"
                  >
                    {category.name}
                  </h3>
                  <span className="inline-block mt-2 text-xs font-sans text-white/80 tracking-wide uppercase border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                    Explore
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
