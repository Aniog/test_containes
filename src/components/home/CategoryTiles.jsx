import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  const categories = [
    { name: 'Earrings', path: '/shop?category=Earrings', imgId: 'cat-earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces', imgId: 'cat-necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies', imgId: 'cat-huggies' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              to={cat.path} 
              className="relative aspect-square overflow-hidden group block bg-secondary"
            >
              <img
                data-strk-img-id={cat.imgId}
                data-strk-img={`close-up luxury gold ${cat.name} jewelry studio shot editorial`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span id={`cat-label-${cat.name}`} className="text-white font-serif text-3xl tracking-widest">{cat.name}</span>
                </div>
                {/* Static label for mobile/base view */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:group-hover:hidden transition-all duration-500">
                  <span className="text-white text-sm uppercase tracking-widest font-medium border-b border-white pb-1">{cat.name}</span>
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
