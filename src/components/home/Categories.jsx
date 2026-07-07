import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Categories = () => {
  const containerRef = useRef(null);
  
  const categories = [
    { name: 'Earrings', id: 'cat-earrings' },
    { name: 'Necklaces', id: 'cat-necklaces' },
    { name: 'Huggies', id: 'cat-huggies' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/shop?category=${cat.name}`}
              className="relative aspect-[4/5] overflow-hidden group rounded-sm"
            >
              <img
                alt={cat.name}
                data-strk-img-id={`cat-img-${cat.id}`}
                data-strk-img={`[cat-name-${cat.id}] aesthetic clean jewelry product photography gold`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-charcoal/20 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="mt-4 transition-transform duration-500 group-hover:mt-0">
                  <span 
                    id={`cat-name-${cat.id}`}
                    className="text-white text-3xl font-serif tracking-widest border-b border-white pb-2"
                  >
                    {cat.name}
                  </span>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 md:hidden">
                 <span className="text-white text-xl font-serif tracking-widest">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
