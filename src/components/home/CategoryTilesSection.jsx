import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CATEGORIES = [
  { id: 'earrings', label: 'Earrings', query: 'gold earrings on model' },
  { id: 'necklaces', label: 'Necklaces', query: 'gold necklace close up' },
  { id: 'huggies', label: 'Huggies', query: 'gold huggie earrings' },
];

export function CategoryTilesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-label text-accent mb-3">Shop by Category</p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso font-light">Find Your Favorite</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.label}`}
              className="relative aspect-[3/4] overflow-hidden group"
            >
              <div
                className="absolute inset-0 bg-espresso/20 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-bg-${cat.id}`}
                data-strk-bg={`[category-title-${cat.id}]`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-espresso/30 group-hover:bg-espresso/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3
                  id={`category-title-${cat.id}`}
                  className="text-white text-2xl md:text-3xl font-serif tracking-wide border-b border-transparent group-hover:border-white pb-1 transition-all"
                >
                  {cat.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
