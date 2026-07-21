import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-foreground">
            Shop by Category
          </h2>
          <p className="text-foreground-muted text-sm mt-3">
            Find your perfect piece
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-muted block"
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[category-desc-${category.id}] [category-name-${category.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 id={`category-name-${category.id}`} className="text-white font-serif text-xl md:text-2xl uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <p id={`category-desc-${category.id}`} className="text-white/70 text-xs mt-2 hidden md:block">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-1 text-white text-xs tracking-wider uppercase">
                    <span>Shop Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}