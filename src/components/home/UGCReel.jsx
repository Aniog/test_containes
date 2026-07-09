import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 'ugc-1', caption: 'Effortless every day' },
    { id: 'ugc-2', caption: 'The ultimate stack' },
    { id: 'ugc-3', caption: 'Gilded memories' },
    { id: 'ugc-4', caption: 'Luxe essentials' },
    { id: 'ugc-5', caption: 'Crafted for you' },
    { id: 'ugc-6', caption: 'Golden hour' },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-[#F9F8F6] overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-center">
        <h2 className="text-3xl font-serif">As Seen on You</h2>
        <span className="text-[10px] uppercase tracking-luxury text-muted-foreground">@velmorafinejewelry</span>
      </div>

      <div className="flex space-x-4 px-6 md:px-12 overflow-x-auto no-scrollbar snap-x">
        {reels.map((reel) => (
          <div key={reel.id} className="relative min-w-[240px] md:min-w-[300px] aspect-[9/16] group overflow-hidden snap-center">
            <img
              data-strk-img-id={reel.id}
              data-strk-img={`[caption-${reel.id}] woman wearing gold jewelry lifestyle minimal`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
               <p id={`caption-${reel.id}`} className="text-lg font-serif text-white italic">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
