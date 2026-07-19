import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';

const CategoryTiles = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      return ImageHelper.loadImages(strkImgConfig, sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-velmora-espresso">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/shop"
              className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-velmora-muted"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={`category-${cat.id}`}
                data-strk-img={`[category-title-${cat.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3
                  id={`category-title-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl font-medium tracking-widest uppercase"
                >
                  {cat.name}
                </h3>
                <p className="font-sans text-xs tracking-wider uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
