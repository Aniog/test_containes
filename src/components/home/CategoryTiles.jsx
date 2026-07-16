import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    { name: 'Earrings', path: '/shop?category=Earrings', id: 'earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces', id: 'necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies', id: 'huggies' },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.path}
            className="group relative aspect-[4/5] overflow-hidden bg-stone-100"
          >
            <div
              data-strk-bg-id={`cat-tile-${cat.id}`}
              data-strk-bg={`close-up luxury gold jewelry ${cat.name} editorial product photography dark neutral background`}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 id={`cat-name-${cat.id}`} className="text-2xl font-serif tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {cat.name}
              </h3>
              <span className="text-[10px] tracking-[0.3em] uppercase border-b border-transparent group-hover:border-white transition-all duration-500 transform translate-y-8 group-hover:translate-y-0">
                Explore
              </span>
            </div>
            {/* Static Label for Mobile/Default */}
            <div className="absolute bottom-6 left-0 right-0 text-center md:group-hover:opacity-0 transition-opacity">
               <h3 className="text-xl font-serif tracking-widest uppercase text-white drop-shadow-md">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
