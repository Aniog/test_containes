import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);
  const categories = [
    { name: 'Earrings', path: '/shop?category=Earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <Link 
            key={cat.name} 
            to={cat.path}
            className="group relative aspect-square bg-secondary overflow-hidden flex items-center justify-center"
          >
            <div 
              className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg-id={`cat-tile-bg-${i}`}
              data-strk-bg={`[cat-label-${i}] luxury jewelry`}
              data-strk-bg-ratio="1x1"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
            
            <span 
              id={`cat-label-${i}`}
              className="relative z-10 text-white text-2xl font-serif uppercase tracking-[0.3em] group-hover:scale-110 transition-transform"
            >
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
