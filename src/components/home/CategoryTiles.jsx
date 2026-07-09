import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    to: '/collection?category=earrings',
    imgId: 'category-earrings',
    query: 'gold earrings collection editorial warm background',
    ratio: '3x4',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    to: '/collection?category=necklaces',
    imgId: 'category-necklaces',
    query: 'gold necklaces collection editorial warm background',
    ratio: '3x4',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    to: '/collection?category=huggies',
    imgId: 'category-huggies',
    query: 'gold huggie earrings collection editorial warm background',
    ratio: '3x4',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-ivory-100">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
            Explore
          </p>
          <h2 className="font-serif text-display-sm md:text-display text-warm-900 mb-4">
            Shop by Category
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={cat.to}
              className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`[cat-label-${cat.id}] jewelry collection editorial`}
                data-strk-img-ratio={cat.ratio}
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-warm-900/20 group-hover:bg-warm-900/30 transition-colors duration-500" />

              <div className="absolute inset-0 flex flex-col items-center justify-end pb-10">
                <span
                  id={`cat-label-${cat.id}`}
                  className="font-serif text-2xl md:text-3xl text-white tracking-wide mb-2"
                >
                  {cat.name}
                </span>
                <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-white/80 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
