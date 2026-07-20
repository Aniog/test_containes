import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-base">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary text-center mb-10 md:mb-14">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-name-${cat.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  id={`category-name-${cat.id}`}
                  className="font-serif text-white text-2xl md:text-3xl font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {cat.name}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="font-sans text-xs font-medium uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 inline-block">
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
