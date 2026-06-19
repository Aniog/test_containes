import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const UGCReel = () => {
  const containerRef = useRef(null);
  
  const items = [
    { id: 'ugc-1', caption: 'Luminous Glow' },
    { id: 'ugc-2', caption: 'Daily Staple' },
    { id: 'ugc-3', caption: 'Golden Hour' },
    { id: 'ugc-4', caption: 'Minimalist Muse' },
    { id: 'ugc-5', caption: 'Night Out' },
    { id: 'ugc-6', caption: 'Self Love' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#F8F6F2]">
      <div className="container mx-auto px-6 text-center mb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-neutral font-medium mb-4 block">As seen on you</span>
        <h2 className="text-4xl font-serif">Velmora In The Wild</h2>
      </div>

      <div className="overflow-x-auto no-scrollbar pb-10">
        <div className="flex space-x-4 px-6 min-w-max">
          {items.map((item) => (
            <div key={item.id} className="relative w-64 aspect-[9/16] overflow-hidden group rounded-sm shadow-sm">
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[cap-${item.id}] jewelry woman portrait editorial ig reel style`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity duration-500 opacity-80 group-hover:opacity-100">
                <p id={`cap-${item.id}`} className="text-white font-serif text-lg italic text-center">"{item.caption}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
