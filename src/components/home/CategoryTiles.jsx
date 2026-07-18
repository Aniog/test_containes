import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const sectionRef = useScrollReveal(0.1);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="reveal py-20 md:py-28">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-mega-wide text-gold mb-3">Explore</p>
          <h2 className="heading-serif text-3xl md:text-5xl text-brand-50">Shop by Category</h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative overflow-hidden aspect-[4/5] md:aspect-[3/4]"
            >
              {/* Image */}
              <img
                data-strk-img-id={`cat-${cat.id}`}
                data-strk-img={`[cat-desc-${cat.id}] [cat-name-${cat.id}] gold jewelry`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-primary/80 via-surface-primary/20 to-transparent" />
              {/* Label — visible on hover / always on mobile */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 id={`cat-name-${cat.id}`} className="heading-serif text-2xl md:text-3xl text-brand-50 mb-1">
                    {cat.name}
                  </h3>
                  <p id={`cat-desc-${cat.id}`} className="text-xs text-brand-300 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cat.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
