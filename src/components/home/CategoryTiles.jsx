import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative overflow-hidden aspect-[4/5]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${category.id}-bg`}
                data-strk-bg={`[category-${category.id}-title] [category-${category.id}-desc] Velmora ${category.name} jewelry`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3
                  id={`category-${category.id}-title`}
                  className="font-serif text-3xl md:text-4xl font-medium mb-2 tracking-wide"
                >
                  {category.name}
                </h3>
                <p
                  id={`category-${category.id}-desc`}
                  className="text-sm text-white/90 text-center font-sans max-w-xs"
                >
                  {category.description}
                </p>
                <span className="mt-4 text-sm uppercase tracking-wider border-b border-white/50 pb-1 group-hover:border-white transition-colors">
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