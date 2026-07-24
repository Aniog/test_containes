import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReel = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 1, title: 'Golden Hour' },
    { id: 2, title: 'The Daily Stack' },
    { id: 3, title: 'Night Out' },
    { id: 4, title: 'Timeless Layers' },
    { id: 5, title: 'Modern Heirloom' },
    { id: 6, title: 'Subtle Shine' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 overflow-hidden bg-background">
      <div className="px-6 mb-12 flex flex-col items-center">
        <h2 className="text-3xl font-serif text-center mb-4 italic">As Seen On You</h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Tag @VELMORA for a chance to be featured</p>
      </div>

      <div ref={containerRef} className="flex space-x-4 px-6 overflow-x-auto pb-8 snap-x no-scrollbar">
        {reels.map((reel) => (
          <div 
            key={reel.id} 
            className="flex-shrink-0 w-64 aspect-[9/16] relative group snap-start bg-secondary overflow-hidden"
          >
            <div 
              className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
              data-strk-bg-id={`ugc-bg-${reel.id}`}
              data-strk-bg={`[ugc-cap-${reel.id}] jewelry worn on ear neck`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="600"
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-40" />
            
            <div className="absolute inset-x-0 bottom-0 p-6 z-10">
              <p 
                id={`ugc-cap-${reel.id}`}
                className="text-white font-serif italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0"
              >
                {reel.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
