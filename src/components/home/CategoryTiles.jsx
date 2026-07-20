import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { categories } from '../../data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-3">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold mx-auto" />
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/collection?category=${cat.id}`}
              className="group relative overflow-hidden rounded-sm aspect-[4/5] sm:aspect-[3/4]"
            >
              <img
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/40 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wider">
                    {cat.name}
                  </h3>
                  <span className="inline-block mt-2 text-[10px] tracking-widest uppercase text-white/80 font-sans border-b border-white/50 pb-0.5 group-hover:border-gold group-hover:text-gold transition-colors">
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
