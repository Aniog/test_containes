import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    query: 'gold earrings jewelry elegant warm lighting',
    ratio: '3x4',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    query: 'gold necklace jewelry elegant warm lighting',
    ratio: '3x4',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    query: 'gold huggie earrings jewelry elegant warm lighting',
    ratio: '3x4',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="section-padding" ref={containerRef}>
      <div className="container-velmora">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-velmora-black">
            Shop by Category
          </h2>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`category-${category.id}`}
                data-strk-bg={category.query}
                data-strk-bg-ratio={category.ratio}
                data-strk-bg-width="800"
                role="img"
                aria-label={category.name}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/40" />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">
                    {category.name}
                  </h3>
                  <span className="font-sans text-xs tracking-widest uppercase text-white/80 border-b border-white/60 pb-1 group-hover:border-velmora-gold group-hover:text-velmora-gold transition-colors">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
