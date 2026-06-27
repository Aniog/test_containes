import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  const categories = [
    { name: 'Earrings', href: '/shop/earrings', query: 'gold earrings display' },
    { name: 'Necklaces', href: '/shop/necklaces', query: 'gold necklace aesthetic' },
    { name: 'Huggies', href: '/shop/huggies', query: 'gold huggie earrings' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Link 
              key={i} 
              to={cat.href}
              className="group relative aspect-[4/5] overflow-hidden bg-stone-muted"
            >
              <img
                data-strk-img-id={`cat-tile-${i}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-3xl font-serif tracking-wide mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                    {cat.name}
                  </h3>
                  <span className="inline-block text-white text-[10px] tracking-[0.3em] font-bold border-b border-white pb-1 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    SHOP COLLECTION
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
