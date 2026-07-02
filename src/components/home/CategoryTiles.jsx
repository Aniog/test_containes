import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);
  const categories = [
    { title: 'Earrings', id: 'earrings' },
    { title: 'Necklaces', id: 'necklaces' },
    { title: 'Huggies', id: 'huggies' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#FCFBF7]">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            to="/shop" 
            className="group relative aspect-square overflow-hidden bg-slate-100 block"
          >
            <img
              data-strk-img-id={`category-tile-${cat.id}`}
              data-strk-img={`[category-title-${cat.id}] gold jewelry editorial close up shot`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={cat.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
              <h3 
                id={`category-title-${cat.id}`} 
                className="text-white font-serif text-3xl md:text-4xl tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out"
              >
                {cat.title}
              </h3>
            </div>
            {/* Label for mobile */}
            <div className="absolute bottom-6 left-6 md:hidden">
              <span className="text-white font-serif text-2xl uppercase tracking-widest">{cat.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
