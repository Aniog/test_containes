import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.slice(0, 3).map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.slug}`}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-border"
                data-strk-bg-id={`cat-bg-${cat.id}`}
                data-strk-bg={`[cat-title-${cat.id}]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
              <img
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={`[cat-title-${cat.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`cat-title-${cat.id}`}
                  className="font-serif text-white text-2xl md:text-3xl tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
