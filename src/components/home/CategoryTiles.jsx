import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold earrings collection elegant display on velvet',
    description: 'Studs, drops & cuffs',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold necklaces collection chains pendants display',
    description: 'Chains, pendants & layers',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie hoop earrings collection close up warm',
    description: 'Everyday huggie hoops',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-ivory">
      <div className="container-page">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-muted font-sans mb-3">
            Explore
          </p>
          <h2 className="heading-serif text-3xl md:text-5xl text-charcoal">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden"
            >
              {/* Background image */}
              <div
                data-strk-bg-id={`category-${category.id}-bg`}
                data-strk-bg={`[category-desc-${category.id}] [category-name-${category.id}] ${category.query}`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 bg-stone-200 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3
                  id={`category-name-${category.id}`}
                  className="font-serif text-2xl md:text-3xl tracking-wide mb-1"
                >
                  {category.name}
                </h3>
                <p
                  id={`category-desc-${category.id}`}
                  className="text-sm text-white/80 mb-4"
                >
                  {category.description}
                </p>
                <span className="text-xs uppercase tracking-widest border-b border-white/60 pb-1 group-hover:border-gold-light group-hover:text-gold-light transition-colors duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
