import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products.js';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-3">
            Discover
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-velmora-charcoal font-light">
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
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img={`[cat-${cat.id}-name] gold jewelry ${cat.id}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                data-strk-img-id={`category-${cat.id}`}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-velmora-ink/30 group-hover:bg-velmora-ink/50 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`cat-${cat.id}-name`}
                  className="font-serif text-2xl md:text-3xl text-white font-light mb-2"
                >
                  {cat.name}
                </h3>
                <p className="font-sans text-xs text-white/70 tracking-widest-lg uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}