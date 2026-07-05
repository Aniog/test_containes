import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);
  
  const categories = [
    { name: "Earrings", id: "cat-earrings" },
    { name: "Necklaces", id: "cat-necklaces" },
    { name: "Huggies", id: "cat-huggies" }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link 
            key={cat.id}
            to={`/shop?category=${cat.name}`}
            className="relative aspect-square md:aspect-[3/4] overflow-hidden group bg-secondary"
          >
            <img
              data-strk-img-id={`cat-tile-${cat.id}`}
              data-strk-img={`[cat-name-${cat.id}] collection banner jewelry`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
              alt={cat.name}
              className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 
                id={`cat-name-${cat.id}`}
                className="text-white text-2xl md:text-3xl font-serif tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
              >
                {cat.name}
              </h3>
            </div>
            
            <div className="absolute bottom-10 left-0 right-0 text-center md:hidden">
              <span className="text-white text-sm tracking-[0.2em] font-serif uppercase border-b border-white pb-1">
                Shop {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
