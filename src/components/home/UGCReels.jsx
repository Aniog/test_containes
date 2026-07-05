import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReels = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 1, caption: "Effortless stacking" },
    { id: 2, caption: "Golden hour glow" },
    { id: 3, caption: "Minimalist everyday" },
    { id: 4, caption: "Special moments" },
    { id: 5, caption: "Texture & shine" },
    { id: 6, caption: "Floral nectar" }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-muted/30 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="font-serif text-2xl tracking-widest uppercase text-center md:text-left">Styled By You</h2>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-12 px-6 px-12-safe no-scrollbar snap-x scroll-px-6">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-shrink-0 w-[240px] md:w-[320px] aspect-[9/16] overflow-hidden group snap-start">
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`woman wearing gold jewelry lifestyle shot warm lighting vertical [ugc-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt="UGC"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6">
              <p 
                id={`ugc-caption-${reel.id}`}
                className="text-white font-serif italic text-lg opacity-90"
              >
                "{reel.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
