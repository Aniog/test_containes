import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const reelItems = [
  { id: 'reel-1', caption: 'Sunday layers' },
  { id: 'reel-2', caption: 'Ear stack essentials' },
  { id: 'reel-3', caption: 'Gift-ready moments' },
  { id: 'reel-4', caption: 'Golden hour glow' },
  { id: 'reel-5', caption: 'Everyday heirloom' },
  { id: 'reel-6', caption: 'Made to mix' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2
          id="ugc-title"
          className="font-serif text-2xl md:text-4xl font-light text-velmora-dark"
        >
          Styled by You
        </h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 sm:px-6 lg:px-8 w-max">
          {reelItems.map((item) => (
            <div
              key={item.id}
              className="relative w-[180px] md:w-[240px] aspect-[9/16] flex-shrink-0 overflow-hidden group"
            >
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[${item.id}-caption] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`${item.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg md:text-xl italic text-white"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
