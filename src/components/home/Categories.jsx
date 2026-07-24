import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Categories = () => {
  const containerRef = useRef(null);
  
  const cats = [
    { name: 'Earrings', id: 'cat-earrings', query: 'gold earring collection minimal aesthetic' },
    { name: 'Necklaces', id: 'cat-necklaces', query: 'gold necklace flatlay aesthetic luxury' },
    { name: 'Huggies', id: 'cat-huggies', query: 'small gold huggie earrings closeup aesthetic' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cats.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/shop?category=${cat.name}`}
            className="relative aspect-[3/4] overflow-hidden group bg-zinc-100"
          >
            <img
              data-strk-img-id={cat.id}
              data-strk-img={cat.query}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#FCFBF7] px-8 py-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1C1C1C]">
                  {cat.name}
                </span>
              </div>
            </div>
            {/* Static Label for Mobile */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden">
               <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white drop-shadow-md">
                  {cat.name}
                </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
