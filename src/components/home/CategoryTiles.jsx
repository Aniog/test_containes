import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { useScrollReveal } from '../../lib/hooks';

const categoryTiles = [
  {
    id: 'earrings',
    name: 'Earrings',
    to: '/collections?category=earrings',
    imgId: 'cat-earrings-f2a8c3',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    to: '/collections?category=necklaces',
    imgId: 'cat-necklaces-d9b4e7',
  },
  {
    id: 'huggies',
    name: 'Huggies',
    to: '/collections?category=huggies',
    imgId: 'cat-huggies-a1c7f5',
  },
];

export default function CategoryTiles() {
  const { ref, isVisible } = useScrollReveal();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={(node) => { ref.current = node; containerRef.current = node; }} className="py-section-mobile md:py-section bg-ivory">
      <div className="max-w-[1280px] mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-caption uppercase tracking-[0.2em] text-gold font-sans font-medium mb-3">
            Explore
          </p>
          <h2 className="font-serif text-h2 text-charcoal">Shop by Category</h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {categoryTiles.map((cat) => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[4/5] md:aspect-[3/4] bg-sand rounded-sm overflow-hidden"
            >
              <img
                alt={`${cat.name} collection`}
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-label-${cat.id}] gold jewelry collection elegant`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p
                  id={`cat-label-${cat.id}`}
                  className="font-serif text-white text-2xl md:text-3xl mb-2"
                >
                  {cat.name}
                </p>
                <span className="text-caption uppercase tracking-btn text-white/70 font-sans group-hover:text-gold transition-colors duration-200">
                  Shop Now →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
