import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Categories = () => {
  const containerRef = useRef(null);
  
  const categories = [
    { name: 'Earrings', path: '/shop?category=earrings', query: 'gold drop earrings editorial jewelry' },
    { name: 'Necklaces', path: '/shop?category=necklaces', query: 'gold chain necklace elegant jewelry model' },
    { name: 'Huggies', path: '/shop?category=huggies', query: 'gold huggie hoop earrings aesthetic jewelry' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              to={cat.path}
              className="group relative aspect-[4/5] overflow-hidden bg-secondary flex items-center justify-center"
            >
              <img
                data-strk-img-id={`cat-tile-${cat.name.toLowerCase()}`}
                data-strk-img={cat.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={`Shop ${cat.name}`}
                className="w-full h-full object-cover transition-editorial duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-white text-3xl md:text-4xl font-serif tracking-widest uppercase transition-editorial group-hover:scale-110">
                  {cat.name}
                </h3>
                <span className="mt-4 text-white text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-editorial transform translate-y-4 group-hover:translate-y-0">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
