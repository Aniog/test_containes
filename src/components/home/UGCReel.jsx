import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'gold earrings woman ear closeup warm light' },
  { id: 'ugc-2', caption: 'Layered & loved', query: 'gold necklace layering woman neck warm tone' },
  { id: 'ugc-3', caption: 'Everyday luxury', query: 'gold huggie earrings woman portrait warm light' },
  { id: 'ugc-4', caption: 'Detail shots', query: 'gold jewelry detail macro warm lighting editorial' },
  { id: 'ugc-5', caption: 'Self-care sparkle', query: 'woman wearing gold jewelry mirror warm light' },
  { id: 'ugc-6', caption: 'Gift-worthy', query: 'gold jewelry gift box luxury packaging warm' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-3">
            Styled by You
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <p className="text-stone-500 text-sm tracking-wider">
            Tag @velmora to be featured
          </p>
        </div>

        {/* Horizontal scroll of vertical cards */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          {ugcItems.map((item, index) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] relative group cursor-pointer"
            >
              <div className="aspect-[9/16] rounded-lg overflow-hidden relative">
                <img
                  data-strk-img-id={item.id}
                  data-strk-img={item.query}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
