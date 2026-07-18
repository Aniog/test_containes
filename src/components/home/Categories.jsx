import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { categories } from '@/data/products';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Categories() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-velmora-cream fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-caption uppercase tracking-mega-wide text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-heading-1 md:text-display text-velmora-charcoal">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Category tiles */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              {/* Background image */}
              <img
                data-strk-img-id={category.imgId}
                data-strk-img={`[${category.descId}] [${category.titleId}] jewelry collection`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-velmora-black/30 group-hover:bg-velmora-black/40 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <h3
                  id={category.titleId}
                  className="font-serif text-heading-1 md:text-display text-velmora-cream mb-2"
                >
                  {category.name}
                </h3>
                <p
                  id={category.descId}
                  className="font-sans text-body-sm text-velmora-cream/70 mb-4"
                >
                  {category.description}
                </p>
                <span className="font-sans text-caption uppercase tracking-ultra-wide text-velmora-gold border-b border-velmora-gold pb-1 group-hover:tracking-mega-wide transition-all duration-300">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
