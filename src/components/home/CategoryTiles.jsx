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
    { name: 'Earrings', href: '/shop?category=Earrings', id: 'cat-earrings' },
    { name: 'Necklaces', href: '/shop?category=Necklaces', id: 'cat-necklaces' },
    { name: 'Huggies', href: '/shop?category=Huggies', id: 'cat-huggies' },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            to={cat.href}
            className="group relative aspect-[4/5] overflow-hidden bg-stone-200"
          >
            <img 
              src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3C/svg%3E'
              alt={cat.name}
              className="w-full h-full object-cover grayscale-[30%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              data-strk-img-id={`cat-img-${cat.id}`}
              data-strk-img={`luxury ${cat.name} jewelry gold close up background`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
               <h3 id={`cat-title-${cat.id}`} className="text-white text-3xl font-serif tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                {cat.name}
               </h3>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white font-sans text-xs uppercase tracking-[0.3em] font-medium group-hover:hidden transition-opacity">
              Shop {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
