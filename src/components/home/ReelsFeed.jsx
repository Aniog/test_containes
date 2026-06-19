import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const ReelsFeed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 1, caption: 'Everyday Essentials' },
    { id: 2, caption: 'Golden Hour' },
    { id: 3, caption: 'The Perfect Gift' },
    { id: 4, caption: 'Luxe Layers' },
    { id: 5, caption: 'Timeless Details' },
    { id: 6, caption: 'The Ear Stack' },
  ];

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-[#FDFCFB]"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#B08D57] mb-4 font-bold">Community</p>
          <h2 className="text-3xl font-serif">Seen on You</h2>
        </div>
        <a href="#" className="text-xs uppercase tracking-widest text-stone-500 hover:text-[#1A1A1A]">@VELMORAFINE</a>
      </div>
      
      <div className="flex overflow-x-auto space-x-4 px-6 md:px-12 scrollbar-hide pb-4">
        {reels.map((reel) => (
          <div 
            key={reel.id} 
            className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] relative group overflow-hidden bg-stone-100 rounded-sm shadow-sm"
          >
            <img 
              alt={reel.caption}
              data-strk-img-id={`reel-img-${reel.id}`}
              data-strk-img={`woman wearing gold jewelry lifestyle photo editorial warm light [reel-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <p 
                id={`reel-caption-${reel.id}`}
                className="text-white font-serif text-lg tracking-wide"
              >
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
