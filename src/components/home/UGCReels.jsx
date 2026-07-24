import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReels = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 'ugc-1', caption: 'The Perfect Stack', query: 'woman wearing multiple gold earrings stylish closeup' },
    { id: 'ugc-2', caption: 'Everyday Luxury', query: 'aesthetic shot of woman wearing gold necklace portrait' },
    { id: 'ugc-3', caption: 'The Aura Cuff', query: 'close up of gold ear cuff on ear portrait vertical' },
    { id: 'ugc-4', caption: 'Golden Hour', query: 'woman wearing jewelry sunset warm lighting high end' },
    { id: 'ugc-5', caption: 'Gifting Moments', query: 'aesthetic hands holding small jewelry box boutique' },
    { id: 'ugc-6', caption: 'Minimalist Muse', query: 'lifestyle shot woman wearing gold necklaces aesthetic' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#F5F2ED] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
        <h2 className="font-serif text-3xl tracking-tight">Seen on Velmora</h2>
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">@VelmoraJewelry</span>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 md:px-[calc((100vw-1280px)/2+24px)]">
        {reels.map((reel) => (
          <div key={reel.id} className="relative min-w-[240px] md:min-w-[280px] aspect-[9/16] overflow-hidden group flex-shrink-0 bg-zinc-200">
            <img
              data-strk-img-id={reel.id}
              data-strk-img={reel.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-serif text-[#FCFBF7] text-lg italic">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
