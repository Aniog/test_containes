import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { id: 'cat-earrings', name: 'Earrings', path: '/shop?category=Earrings' },
    { id: 'cat-necklaces', name: 'Necklaces', path: '/shop?category=Necklaces' },
    { id: 'cat-huggies', name: 'Huggies', path: '/shop?category=Huggies' },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.path}
            className="group relative aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center"
          >
            <div
              className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg-id={`cat-bg-${cat.id}`}
              data-strk-bg={`[cat-name-${cat.id}] gold jewelry product minimal luxury`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1000"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            
            <div className="relative z-10 text-center">
              <h3 
                id={`cat-name-${cat.id}`}
                className="text-white text-3xl font-serif tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                {cat.name}
              </h3>
              <span className="inline-block mt-4 text-white text-[10px] uppercase tracking-[0.3em] font-medium border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Explore
              </span>
            </div>
            
            {/* Label visible only on desktop hover */}
            <div className="md:hidden absolute bottom-4 inset-x-0 text-center">
               <h3 className="text-white text-xl font-serif">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
