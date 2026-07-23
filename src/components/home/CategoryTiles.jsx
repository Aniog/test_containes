import React, { useEffect, useRef } from 'react';
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
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">Explore</p>
          <h2 className="font-serif text-2xl md:text-3xl text-ink">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-smooth group-hover:scale-105"
                data-strk-bg-id={`cat-bg-${cat.id}`}
                data-strk-bg={`[cat-name-${cat.id}]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              >
                <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/20 transition-colors duration-300" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-warm-white tracking-wide group-hover:tracking-wider transition-all duration-300"
                >
                  {cat.name}
                </h3>
              </div>
              <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-warm-white text-[10px] tracking-[0.2em] uppercase border border-warm-white/60 px-4 py-2 hover:bg-warm-white hover:text-ink transition-colors duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
