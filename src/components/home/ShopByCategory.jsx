import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From studs to drops',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Layer & stack',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    description: 'Everyday essentials',
  },
];

export default function ShopByCategory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Shop by Category</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative block overflow-hidden"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                data-strk-img-id={`cat-${cat.id}-b4d8e1`}
                data-strk-img={`[cat-name-${cat.id}] [cat-desc-${cat.id}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1.25'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3
                  id={`cat-name-${cat.id}`}
                  className="font-serif text-3xl md:text-4xl text-white font-light mb-1"
                >
                  {cat.name}
                </h3>
                <p
                  id={`cat-desc-${cat.id}`}
                  className="text-xs text-white/60 uppercase tracking-widest font-sans"
                >
                  {cat.description}
                </p>
                <span className="mt-4 text-xs uppercase tracking-widest font-sans text-white border-b border-white/50 pb-0.5 group-hover:border-gold group-hover:text-gold transition-colors duration-300">
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
