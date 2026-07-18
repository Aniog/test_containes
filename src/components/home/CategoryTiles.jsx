import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { title: 'Earrings', imageId: 'cat-earrings', query: 'gold earrings luxury model ear' },
    { title: 'Necklaces', imageId: 'cat-necklaces', query: 'gold necklace luxury model neck' },
    { title: 'Huggies', imageId: 'cat-huggies', query: 'gold huggie earrings jewelry' }
  ];

  return (
    <section ref={containerRef} className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.title}
            to="/shop"
            className="relative aspect-[3/4] overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg-id={cat.imageId}
              data-strk-bg={cat.query}
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-serif tracking-widest uppercase mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {cat.title}
              </h3>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-b border-white pb-1">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
