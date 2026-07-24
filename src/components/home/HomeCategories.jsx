import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { collections } from '../../lib/data';

const HomeCategories = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((col) => (
            <Link key={col.id} to={`/shop?category=${col.name}`} className="group relative block aspect-[4/5] bg-muted overflow-hidden">
               <img
                  data-strk-img-id={`cat-tile-${col.id}`}
                  data-strk-img={`[cat-name-${col.id}] collection lifestyle jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={col.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Label */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                   <div className="text-center">
                     <h3 id={`cat-name-${col.id}`} className="font-serif text-white text-3xl md:text-4xl uppercase tracking-[0.2em] transition-transform duration-500 group-hover:scale-110">
                       {col.name}
                     </h3>
                     <div className="mt-4 overflow-hidden">
                        <span className="text-white text-[10px] uppercase tracking-[0.3em] font-medium block translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                           Discover More
                        </span>
                     </div>
                   </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
