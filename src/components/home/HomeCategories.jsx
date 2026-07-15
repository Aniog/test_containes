import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CATEGORY_TILES = [
  { id: 'earrings', name: 'Earrings', query: 'gold earring collection editorial' },
  { id: 'necklaces', name: 'Necklaces', query: 'gold necklace jewelry editorial' },
  { id: 'huggies', name: 'Huggies', query: 'gold huggie earring close up' },
];

const HomeCategories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CATEGORY_TILES.map((cat, index) => (
          <Link 
            key={cat.id} 
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] bg-[#F4F1ED] overflow-hidden"
          >
            <img
              data-strk-img-id={`cat-tile-${cat.id}`}
              data-strk-img={cat.query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-white text-3xl font-serif tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {cat.name}
              </h3>
              <div className="w-12 h-[1px] bg-white mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
            
            {/* Static Label for Mobile */}
            <div className="absolute bottom-6 left-6 md:hidden">
              <span className="text-white text-sm uppercase tracking-[0.3em] font-medium border-b border-white pb-1">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeCategories;
