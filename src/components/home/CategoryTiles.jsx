import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const categoryImages = [
  { imgId: 'cat-earrings-img-m3n4o5', descId: 'cat-earrings-desc' },
  { imgId: 'cat-necklaces-img-p6q7r8', descId: 'cat-necklaces-desc' },
  { imgId: 'cat-huggies-img-s9t0u1', descId: 'cat-huggies-desc' },
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-brand-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 id="categories-title" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal">
            Shop by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[4/3] overflow-hidden bg-brand-ivory"
            >
              <img
                data-strk-img-id={categoryImages[i].imgId}
                data-strk-img={`[${cat.titleId}] [categories-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-white font-light tracking-wide"
                >
                  {cat.name}
                </h3>
              </div>
              <p id={categoryImages[i].descId} className="sr-only">
                Shop {cat.name} collection gold jewelry
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
