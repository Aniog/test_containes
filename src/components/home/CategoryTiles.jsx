import React, { useRef, useEffect } from 'react';
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
    <section ref={containerRef} className="section-padding section-margin">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p 
            className="text-xs uppercase tracking-widest text-charcoal/50 mb-2"
            style={{ letterSpacing: '0.3em' }}
          >
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mt-4" />
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={`category-${category.id}`}
                data-strk-img={`[${category.id}-desc] [${category.id}-title] gold jewelry collection`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-500" />
              
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-cream">
                <h3 
                  id={`${category.id}-title`}
                  className="font-serif text-3xl md:text-4xl uppercase tracking-widest mb-2"
                  style={{ letterSpacing: '0.2em' }}
                >
                  {category.name}
                </h3>
                <p 
                  id={`${category.id}-desc`}
                  className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
