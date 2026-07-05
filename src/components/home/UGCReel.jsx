import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', titleId: 'ugc-reel-1-title', imgId: 'ugc-reel-img-1-x1y2z3' },
  { id: 'reel-2', caption: 'Stacked & styled', titleId: 'ugc-reel-2-title', imgId: 'ugc-reel-img-2-a4b5c6' },
  { id: 'reel-3', caption: 'Golden hour glow', titleId: 'ugc-reel-3-title', imgId: 'ugc-reel-img-3-d7e8f9' },
  { id: 'reel-4', caption: 'Gift-worthy moments', titleId: 'ugc-reel-4-title', imgId: 'ugc-reel-img-4-g0h1i2' },
  { id: 'reel-5', caption: 'Minimal luxe', titleId: 'ugc-reel-5-title', imgId: 'ugc-reel-img-5-j3k4l5' },
  { id: 'reel-6', caption: 'Date night ready', titleId: 'ugc-reel-6-title', imgId: 'ugc-reel-img-6-m6n7o8' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal">
            As Seen On You
          </h2>
          <a href="#" className="text-xs tracking-widest uppercase text-brand-muted hover:text-brand-gold transition-colors font-sans">
            @velmora
          </a>
        </div>
      </div>

      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
        {reels.map(reel => (
          <div key={reel.id} className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer">
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry woman wearing`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <span id={reel.titleId} className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
              {reel.caption}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
