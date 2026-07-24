import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugc_reels } from '../../lib/data';

const HomeUGCReels = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-center italic">Seen on You</h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-center mt-4 text-muted-foreground whitespace-nowrap">Tag @VELMORAFINE to be featured</p>
      </div>

      <div className="flex space-x-4 px-6 md:px-12 overflow-x-auto pb-8 scrollbar-hide no-scrollbar">
        {ugc_reels.map((reel) => (
          <div key={reel.id} className="relative flex-none w-[280px] aspect-[9/16] bg-muted overflow-hidden group">
            <img
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] jewelry lifestyle`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
            {/* Soft serif caption overlay */}
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
               <p id={`ugc-caption-${reel.id}`} className="font-serif text-white text-lg leading-relaxed italic opacity-90">
                 "{reel.caption}"
               </p>
            </div>
            
            {/* Play Button Icon for Reel Vibe */}
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
               <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-1" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeUGCReels;
