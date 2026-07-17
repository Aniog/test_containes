import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const categories = [
  { id: 'earrings', label: 'Earrings', term: 'gold earring collection' },
  { id: 'necklaces', label: 'Necklaces', term: 'fine necklace layering' },
  { id: 'huggies', label: 'Huggies', term: 'chunky gold huggie earrings' }
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-velmora-ivory">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {categories.map((cat, idx) => (
          <Link 
            key={cat.id}
            to={`/shop?category=${cat.label}`}
            className="group relative aspect-square overflow-hidden bg-velmora-stone"
          >
            <img
              data-strk-img-id={`cat-img-${cat.id}`}
              data-strk-img={`[cat-label-${cat.id}] ${cat.term} editorial`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.label}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-x-0 bottom-10 flex justify-center">
              <span 
                id={`cat-label-${cat.id}`}
                className="text-white text-xs uppercase tracking-widest font-bold border-b border-white pb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
              >
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
