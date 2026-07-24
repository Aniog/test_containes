import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const categories = [
  {
    id: 'earrings',
    title: 'Earrings',
    query: 'elegantly styled gold earrings on model portrait',
    imgId: 'cat-earrings'
  },
  {
    id: 'necklaces',
    title: 'Necklaces',
    query: 'delicate gold layered necklaces on neck detailed',
    imgId: 'cat-necklaces'
  },
  {
    id: 'huggies',
    title: 'Huggies',
    query: 'chunky gold huggie hoops on ear minimal',
    imgId: 'cat-huggies'
  }
];

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[4/5] block overflow-hidden"
          >
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              data-strk-bg-id={cat.imgId}
              data-strk-bg={`[cat-title-${cat.id}] ${cat.query}`}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 
                id={`cat-title-${cat.id}`}
                className="font-heading text-3xl tracking-widest text-white uppercase"
              >
                {cat.title}
              </h3>
            </div>
            
            {/* Minimal button that appears on hover */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-xs uppercase tracking-[0.2em] text-white border-b border-white pb-1 font-medium">
                Explore
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
