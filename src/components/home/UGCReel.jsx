import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReel = () => {
  const containerRef = useRef(null);
  
  const items = [
    { id: 'ugc-1', caption: 'Morning Light' },
    { id: 'ugc-2', caption: 'The Perfect Stack' },
    { id: 'ugc-3', caption: 'Effortless Elegance' },
    { id: 'ugc-4', caption: 'Golden Hour' },
    { id: 'ugc-5', caption: 'Daily Classics' },
    { id: 'ugc-6', caption: 'Treasured Details' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden" ref={containerRef}>
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-4xl mb-2">As Seen On You</h2>
          <p className="text-zinc-500 text-sm italic">Tag @VELMORAFINE to be featured</p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 md:px-12 no-scrollbar pb-8">
        {items.map((item) => (
          <div key={item.id} className="min-w-[200px] md:min-w-[280px] aspect-[9/16] relative bg-zinc-100 group cursor-pointer overflow-hidden">
             <img
              data-strk-img-id={item.id}
              data-strk-img={`[ugc-caption-${item.id}] jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <p id={`ugc-caption-${item.id}`} className="text-white text-lg font-serif italic tracking-wide">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
