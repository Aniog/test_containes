import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReels = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 1, caption: "Golden Hour Glow", tags: "[reel-1-caption] jewelry-worn-on-ear" },
    { id: 2, caption: "The Perfect Stack", tags: "[reel-2-caption] jewelry-neck" },
    { id: 3, caption: "Everyday Treasures", tags: "[reel-3-caption] earrings-detail" },
    { id: 4, caption: "Crafted for You", tags: "[reel-4-caption] necklaces-on-model" },
    { id: 5, caption: "Velmora Moments", tags: "[reel-5-caption] elegant-jewelry-lifestyle" }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="px-6 md:px-12 mb-12">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-2">Worn by You</h2>
        <p className="font-sans text-xs uppercase tracking-widest-lg opacity-60">Tag us @VelmoraFineJewelry to be featured</p>
      </div>

      <div className="flex overflow-x-auto gap-4 px-6 md:px-12 no-scrollbar">
        {reels.map((reel) => (
          <div key={reel.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative bg-velmora-stone overflow-hidden group">
            <div 
              className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
              data-strk-bg-id={`ugc-reel-${reel.id}`}
              data-strk-bg={reel.tags}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="600"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p 
                id={`reel-${reel.id}-caption`}
                className="font-serif text-xl md:text-2xl text-white tracking-wide"
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

export default UGCReels;
