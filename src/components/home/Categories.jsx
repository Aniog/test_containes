import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const Categories = () => {
  const containerRef = useRef(null);

  const categories = [
    { name: "Earrings", img: "gold drop earrings close up on white silk" },
    { name: "Necklaces", img: "delicate gold necklace on model skin warm lighting" },
    { name: "Huggies", img: "gold huggie earrings display close up" }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1600px] mx-auto">
        {categories.map((cat, idx) => (
          <Link 
            key={cat.name} 
            to={`/shop?category=${cat.name.toLowerCase()}`}
            className="group relative aspect-[4/5] overflow-hidden bg-muted"
          >
            <img 
               data-strk-img-id={`cat-${idx}`}
               data-strk-img={cat.img}
               data-strk-img-ratio="4x5"
               data-strk-img-width="800"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
               alt={cat.name}
               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-3xl text-white tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                {cat.name}
              </span>
            </div>
            <div className="absolute bottom-8 left-0 w-full text-center md:hidden">
               <span className="font-serif text-2xl text-white tracking-widest uppercase">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
