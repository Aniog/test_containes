import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReels = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 1, caption: 'Everyday Stack' },
    { id: 2, caption: 'The Golden Hour' },
    { id: 3, caption: 'Parisian Nights' },
    { id: 4, caption: 'Weekend Glow' },
    { id: 5, caption: 'Simply Timeless' },
    { id: 6, caption: 'Modern Muse' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="px-6 md:px-12 mb-12">
        <h2 id="reels-title" className="font-serif text-2xl md:text-3xl tracking-tight">Seen on You</h2>
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-2">Tag #VELMORA to be featured</p>
      </div>
      
      <div className="flex gap-4 overflow-x-auto px-6 md:px-12 no-scrollbar pb-8">
        {reels.map((reel) => (
          <div key={reel.id} className="relative w-64 md:w-80 flex-shrink-0 aspect-[9/16] overflow-hidden group">
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[reel-caption-${reel.id}] woman wearing gold jewelry editorial lifestyle`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <span id={`reel-caption-${reel.id}`} className="text-white font-serif text-2xl italic tracking-wide">
                {reel.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
