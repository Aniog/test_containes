import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCStrip = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 'reel-1', caption: 'Everyday elegance' },
    { id: 'reel-2', caption: 'The perfect drop' },
    { id: 'reel-3', caption: 'Stacked to perfection' },
    { id: 'reel-4', caption: 'Gifted with love' },
    { id: 'reel-5', caption: 'Golden hours' },
    { id: 'reel-6', caption: 'Details' },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-[#FDFCFB] overflow-hidden">
      <div className="px-6 md:px-12 mb-10">
        <h2 className="text-3xl font-serif text-center">As Worn by You</h2>
        <p className="text-center text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-2">#VELMORASPIRIT</p>
      </div>

      <div className="flex overflow-x-auto pb-8 space-x-4 px-6 md:px-12 no-scrollbar scroll-smooth">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] relative group overflow-hidden"
          >
            <img
              data-strk-img-id={`ugc-img-${reel.id}`}
              data-strk-img={`[${reel.id}-caption] jewelry worn on model close-up aesthetic vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt="UGC"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6">
              <p id={`${reel.id}-caption`} className="text-white font-serif italic text-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                "{reel.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCStrip;
EOF > /workspace/my-app/src/components/home/UGCStrip.jsx
import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCStrip = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 'reel-1', caption: 'Everyday elegance' },
    { id: 'reel-2', caption: 'The perfect drop' },
    { id: 'reel-3', caption: 'Stacked to perfection' },
    { id: 'reel-4', caption: 'Gifted with love' },
    { id: 'reel-5', caption: 'Golden hours' },
    { id: 'reel-6', caption: 'Details' },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-[#FDFCFB] overflow-hidden">
      <div className="px-6 md:px-12 mb-10">
        <h2 className="text-3xl font-serif text-center">As Worn by You</h2>
        <p className="text-center text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-2">#VELMORASPIRIT</p>
      </div>

      <div className="flex overflow-x-auto pb-8 space-x-4 px-6 md:px-12 no-scrollbar scroll-smooth">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] relative group overflow-hidden"
          >
            <img
              data-strk-img-id={`ugc-img-${reel.id}`}
              data-strk-img={`[${reel.id}-caption] jewelry worn on model close-up aesthetic vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt="UGC"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6">
              <p id={`${reel.id}-caption`} className="text-white font-serif italic text-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                "{reel.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCStrip;
