import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryGrid = () => {
  const containerRef = useRef(null);

  const categories = [
    { name: 'Earrings', id: 'cat-earrings', imgId: 'cat-ear-img' },
    { name: 'Necklaces', id: 'cat-necklaces', imgId: 'cat-neck-img' },
    { name: 'Huggies', id: 'cat-huggies', imgId: 'cat-hug-img' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/shop?category=${cat.name}`}
            className="group relative aspect-[4/5] overflow-hidden bg-stone-100"
          >
            <img 
              data-strk-img-id={cat.imgId}
              data-strk-img={`[name-${cat.id}] collection luxury jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt={cat.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 
                id={`name-${cat.id}`}
                className="text-white text-2xl font-serif tracking-[0.2em] uppercase transition-transform duration-500 group-hover:translate-y-[-10px]"
              >
                {cat.name}
              </h3>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-white text-[10px] uppercase tracking-widest border-b border-white pb-1">Shop Collection</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
