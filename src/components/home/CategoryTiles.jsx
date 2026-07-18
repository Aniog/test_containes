import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);

  const categories = [
    { id: 'earrings', name: 'Earrings', titleId: 'cat-title-earrings' },
    { id: 'necklaces', name: 'Necklaces', titleId: 'cat-title-necklaces' },
    { id: 'huggies', name: 'Huggies', titleId: 'cat-title-huggies' },
  ];

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-square overflow-hidden bg-stone-200 block"
            >
              <img
                alt={`Shop ${cat.name}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={`[${cat.titleId}] jewelry`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 
                  id={cat.titleId}
                  className="text-stone-50 font-serif text-3xl tracking-widest uppercase opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                >
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
