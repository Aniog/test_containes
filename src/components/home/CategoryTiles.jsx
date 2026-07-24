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
    { title: 'Earrings', path: '/collections/earrings', id: 'earrings', desc: 'Statement and everyday earrings' },
    { title: 'Necklaces', path: '/collections/necklaces', id: 'necklaces', desc: 'Layered chains and pendants' },
    { title: 'Huggies', path: '/collections/huggies', id: 'huggies', desc: 'Mini hoops and everyday huggies' }
  ];

  return (
    <section ref={containerRef} className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 id="categories-title" className="sr-only">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
          {categories.map((category, idx) => (
            <Link 
              key={category.id} 
              to={category.path}
              className="relative group overflow-hidden bg-secondary block h-[300px] md:h-full"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt={`Shop ${category.title}`}
                data-strk-img-id={`cat-${category.id}`}
                data-strk-img={`[cat-desc-${category.id}] [cat-title-${category.id}] jewelry worn model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
              
              <div className="absolute inset-x-0 bottom-8 flex flex-col items-center justify-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 
                  id={`cat-title-${category.id}`} 
                  className="text-white text-3xl font-serif tracking-widest uppercase text-center"
                >
                  {category.title}
                </h3>
                <p 
                  id={`cat-desc-${category.id}`}
                  className="text-white/80 mt-2 tracking-widest text-sm uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
                >
                  Shop Now
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;
