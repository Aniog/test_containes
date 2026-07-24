import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CategoryTiles = () => {
  const containerRef = useRef(null);
  
  const categories = [
    { title: "Earrings", path: "/shop?category=earrings", tags: "[cat-1-title] elegant gold earrings display" },
    { title: "Necklaces", path: "/shop?category=necklaces", tags: "[cat-2-title] luxurious gold necklace display" },
    { title: "Huggies", path: "/shop?category=huggies", tags: "[cat-3-title] gold huggie earrings close up" }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-velmora-cream" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <Link 
            key={cat.title} 
            to={cat.path}
            className="group relative aspect-[4/5] overflow-hidden bg-velmora-stone"
          >
            <div 
              className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg-id={`cat-tile-${idx}`}
              data-strk-bg={cat.tags}
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <span 
                id={`cat-${idx}-title`}
                className="font-serif text-3xl md:text-4xl text-white tracking-widest-lg uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
              >
                {cat.title}
              </span>
            </div>

            {/* Always visible label on mobile? Prompt says "label on hover" but for good UX let's keep it subtle */}
            <div className="absolute bottom-10 left-10 md:hidden">
               <span className="font-serif text-2xl text-white tracking-widest-lg uppercase">{cat.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryTiles;
