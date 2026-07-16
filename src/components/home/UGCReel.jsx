import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reelItems = [
    { id: 1, caption: 'Everyday Stack' },
    { id: 2, caption: 'Self-Care Rituals' },
    { id: 3, caption: 'Evening Radiance' },
    { id: 4, caption: 'Handcrafted Detail' },
    { id: 5, caption: 'Golden Hour' },
    { id: 6, caption: 'Timeless Set' },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <h2 className="text-3xl font-serif">Worn by You</h2>
            <p className="text-muted-foreground tracking-[0.2em] text-[10px] uppercase">
              Tag @VelmoraFineJewelry to be featured
            </p>
          </div>
        </div>

        <div className="flex space-x-4 overflow-x-auto pb-8 snap-x no-scrollbar">
          {reelItems.map((item) => (
            <div
              key={item.id}
              className="relative min-w-[200px] md:min-w-[280px] aspect-[9/16] snap-start group"
            >
              <img
                data-strk-img-id={`ugc-reel-${item.id}`}
                data-strk-img={`woman wearing gold jewelry lifestyle photoshoot [ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={item.caption}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p id={`ugc-caption-${item.id}`} className="font-serif italic text-lg leading-tight">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
