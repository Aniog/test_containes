import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);
  
  const categories = [
    { title: 'Earrings', path: '/shop?category=Earrings', id: 'cat-earrings' },
    { title: 'Necklaces', path: '/shop?category=Necklaces', id: 'cat-necklaces' },
    { title: 'Huggies', path: '/shop?category=Huggies', id: 'cat-huggies' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={cat.path}
              className="group relative aspect-[4/5] overflow-hidden bg-brand-neutral/5"
            >
              <img
                data-strk-img-id={cat.id}
                data-strk-img={`[title-${cat.id}] fine jewelry category photography editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
              <div id={`title-${cat.id}`} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-serif tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:-translate-y-1/2">
                {cat.title}
              </div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white border-b border-white pb-1 text-[10px] uppercase tracking-widest font-semibold">
                Shop {cat.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
