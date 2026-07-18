import React, { useEffect, useRef } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReel = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 'ugc-1', caption: 'Everyday Glow', imgId: 'ugc-ear' },
    { id: 'ugc-2', caption: 'Golden Hour', imgId: 'ugc-neck' },
    { id: 'ugc-3', caption: 'The Perfect Cuff', imgId: 'ugc-cuff' },
    { id: 'ugc-4', caption: 'Minimalist Magic', imgId: 'ugc-stack' },
    { id: 'ugc-5', caption: 'Dreaming in Gold', imgId: 'ugc-ring' },
    { id: 'ugc-6', caption: 'Modern Vintage', imgId: 'ugc-model' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 bg-stone-50 overflow-hidden" ref={containerRef}>
      <div className="px-6 mb-12 flex flex-col items-center text-center">
        <h2 className="text-3xl font-serif mb-2">As Worn By You</h2>
        <p className="text-stone-500 text-sm tracking-widest uppercase">Tag @VELMORAFINE to be featured</p>
      </div>

      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-4 px-6 pb-4">
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              className="relative w-[180px] md:w-[280px] aspect-[9/16] overflow-hidden flex-shrink-0 group"
            >
              <img 
                data-strk-img-id={reel.imgId}
                data-strk-img={`[caption-${reel.id}] jewelry worn on person`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end h-40">
                <p 
                  id={`caption-${reel.id}`}
                  className="text-white font-serif text-lg italic whitespace-normal"
                >
                  "{reel.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default UGCReel;
