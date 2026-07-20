import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import AnimatedSection from '../ui/AnimatedSection';

const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    slug: '/shop?category=earrings',
    imgId: 'cat-earrings',
    nameId: 'cat-earrings-name',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    slug: '/shop?category=necklaces',
    imgId: 'cat-necklaces',
    nameId: 'cat-necklaces-name',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    slug: '/shop?category=huggies',
    imgId: 'cat-huggies',
    nameId: 'cat-huggies-name',
  },
];

export default function Categories() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <p className="text-gold-600 text-xs tracking-mega-wide uppercase font-medium mb-3">
            Browse
          </p>
          <h2 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-950 font-light">
            Shop by Category
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </AnimatedSection>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categoryTiles.map((cat, index) => (
            <AnimatedSection key={cat.id} delay={index + 1}>
              <Link
                to={cat.slug}
                className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-sm overflow-hidden block"
              >
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.nameId}] gold jewelry collection`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal-950/30 group-hover:bg-charcoal-950/40 transition-colors duration-300" />
                {/* Label */}
                <div className="absolute inset-0 flex items-end justify-center pb-8 sm:pb-10">
                  <div className="text-center">
                    <h3 id={cat.nameId} className="heading-serif text-2xl sm:text-3xl text-white font-light tracking-wide">
                      {cat.name}
                    </h3>
                    <span className="inline-block mt-2 text-[10px] tracking-ultra-wide uppercase text-brand-200 border-b border-brand-300/50 pb-0.5 group-hover:text-gold-300 group-hover:border-gold-400 transition-colors">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
