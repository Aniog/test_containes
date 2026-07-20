import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'cat-earrings',
    name: 'Earrings',
    query: 'gold earrings collection editorial warm background',
    path: '/shop?category=earrings',
  },
  {
    id: 'cat-necklaces',
    name: 'Necklaces',
    query: 'gold necklace collection editorial warm background',
    path: '/shop?category=necklaces',
  },
  {
    id: 'cat-huggies',
    name: 'Huggies',
    query: 'gold huggie earrings collection editorial warm background',
    path: '/shop?category=huggies',
  },
];

export default function CategoryTiles() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-overline text-gilded-600 mb-3">Explore</p>
          <h2 className="text-heading text-velvet-950">Shop by Category</h2>
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.path}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                data-strk-img-id={cat.id}
                data-strk-img={`[cat-label-${cat.id}] jewelry collection editorial`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-velvet-950/20 group-hover:bg-velvet-950/40 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-10">
                <div className="text-center">
                  <h3
                    id={`cat-label-${cat.id}`}
                    className="font-serif text-2xl lg:text-3xl text-white tracking-wider"
                  >
                    {cat.name}
                  </h3>
                  <span className="text-overline text-white/70 mt-2 block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Shop Now &rarr;
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
