import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categoryTiles = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    query: 'gold earrings collection flat lay editorial',
    path: '/shop?category=earrings',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    query: 'gold necklace collection flat lay editorial',
    path: '/shop?category=necklaces',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    query: 'gold huggie earrings collection flat lay',
    path: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-accent mb-3">Explore</p>
          <h2 className="serif-heading text-3xl md:text-4xl">Shop by Category</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categoryTiles.map(tile => (
            <Link
              key={tile.id}
              to={tile.path}
              className="group relative aspect-[4/5] bg-surface overflow-hidden"
            >
              <div
                data-strk-bg-id={tile.id}
                data-strk-bg={`[${tile.id}-label] [categories-title]`}
                data-strk-bg-ratio="4x5"
                data-strk-bg-width="800"
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p id={`${tile.id}-label`} className="product-name text-white text-xl md:text-2xl tracking-widest mb-4">
                  {tile.name}
                </p>
                <div className="flex items-center gap-2 text-white/80 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
