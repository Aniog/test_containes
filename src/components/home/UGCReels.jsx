import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReels = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 1, caption: 'Everyday Essentials' },
    { id: 2, caption: 'Golden Hour' },
    { id: 3, caption: 'Modern Classic' },
    { id: 4, caption: 'Statement Stack' },
    { id: 5, caption: 'The Perfect Gift' },
    { id: 6, caption: 'Minimalist Dream' }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 bg-secondary/20" ref={containerRef}>
      <div className="px-6 md:px-12 mb-12 flex flex-col items-center text-center">
        <h2 id="ugc-title" className="text-sm brand-title text-muted-foreground mb-4">Worn by You</h2>
        <p className="text-2xl md:text-3xl font-serif">Tag @VELMORA for a chance to be featured</p>
      </div>

      <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory px-4 md:px-12 gap-4">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-shrink-0 w-64 md:w-80 aspect-[9/16] bg-secondary group cursor-pointer snap-start overflow-hidden">
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[ugc-reel-caption-${reel.id}] [ugc-title] jewelry worn on ear neck`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
              alt="UGC Content"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6">
              <p id={`ugc-reel-caption-${reel.id}`} className="text-white font-serif text-lg italic">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
