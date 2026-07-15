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
    <section ref={containerRef} className="py-20 md:py-28 bg-cream">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal text-center mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4]"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-name-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-name-${cat.id}`}
                  className="font-serif text-white text-xl md:text-2xl tracking-wide font-light border-b border-transparent group-hover:border-white/60 pb-1 transition-all duration-500"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
