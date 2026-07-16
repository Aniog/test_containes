import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);
  const categories = [
    { name: 'Earrings', path: '/shop?category=Earrings', id: 'cat-e' },
    { name: 'Necklaces', path: '/shop?category=Necklaces', id: 'cat-n' },
    { name: 'Huggies', path: '/shop?category=Huggies', id: 'cat-h' }
  ];

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.path} className="group relative aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                data-strk-img-id={`cat-v2-img-${cat.id}`}
                data-strk-img={`[cat-v2-name-${cat.id}] luxury gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/95 backdrop-blur-md px-10 py-4 shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span id={`cat-v2-name-${cat.id}`} className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">
                      {cat.name}
                    </span>
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
