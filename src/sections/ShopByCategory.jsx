import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { categories } from '../data/products';

const ShopByCategory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2
            id="category-title"
            className="font-serif text-3xl md:text-5xl font-light text-velmora-dark mb-3"
          >
            Shop by Category
          </h2>
          <p id="category-subtitle" className="text-velmora-muted text-sm md:text-base">
            Find your perfect finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden bg-stone-200"
            >
              <div
                data-strk-bg-id={`category-bg-${category.id}`}
                data-strk-bg={`[category-label-${category.id}] [category-title]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-stone-300 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-label-${category.id}`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase border-b border-white/60 pb-2 group-hover:border-white transition-colors"
                >
                  {category.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
