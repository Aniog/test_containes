import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CategoryTiles = () => {
  const containerRef = useRef(null);
  const [headingRef, headingVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`reveal ${headingVisible ? 'visible' : ''} text-center mb-12`}
        >
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-text">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div
          ref={gridRef}
          className={`reveal ${gridVisible ? 'visible' : ''} grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6`}
        >
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4x5] md:aspect-[3x4] overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={cat.titleId}
                  className="font-serif text-2xl md:text-3xl text-white tracking-[0.15em] uppercase"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="sr-only">{cat.name} jewelry collection</p>
                <span className="mt-3 text-[11px] tracking-[0.2em] uppercase text-white/80 border-b border-white/50 pb-0.5 group-hover:border-white transition-all duration-300 group-hover:tracking-[0.25em]">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
