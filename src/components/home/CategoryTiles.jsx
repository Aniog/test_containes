import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    imgId: 'cat-earrings-img-v1w2x3',
    desc: 'From statement drops to everyday studs',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    imgId: 'cat-necklaces-img-y4z5a6',
    desc: 'Layers of gold, moments of beauty',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    imgId: 'cat-huggies-img-b7c8d9',
    desc: 'The perfect hug for your ears',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="section-subheading mb-3">Explore</p>
          <h2 className="section-heading">Shop by Category</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Category tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              {/* Background image */}
              <img
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={cat.imgId}
                data-strk-img={`[${cat.id}-cat-label] gold jewelry collection ${cat.name}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span id={`${cat.id}-cat-label`} className="hidden">{cat.name}</span>
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-ultra-wide mb-2">
                  {cat.name}
                </h3>
                <p className="font-sans text-xs text-white/60 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
