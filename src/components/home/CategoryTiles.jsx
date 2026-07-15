import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import strkImgConfig from '@/strk-img-config.json';
import { ImageHelper } from '@strikingly/sdk';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      id: 'earrings',
      name: 'Earrings',
      path: '/shop?category=earrings',
      query: 'gold earrings collection flatlay elegant',
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      path: '/shop?category=necklaces',
      query: 'gold necklaces collection flatlay elegant',
    },
    {
      id: 'huggies',
      name: 'Huggies',
      path: '/shop?category=huggies',
      query: 'gold huggie earrings collection flatlay',
    },
  ];

  return (
    <section ref={containerRef} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-3">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] bg-secondary rounded-sm overflow-hidden"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${cat.id}`}
                data-strk-bg={cat.query}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 tracking-wide">
                    {cat.name}
                  </h3>
                  <span className="font-sans text-xs tracking-widest uppercase text-white/80 group-hover:text-white transition-colors inline-flex items-center gap-2">
                    Explore
                    <span className="w-6 h-px bg-white/60 group-hover:w-10 transition-all duration-300" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
