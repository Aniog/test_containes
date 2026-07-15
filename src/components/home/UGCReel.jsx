import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday gold', titleId: 'ugc-title-1', imgId: 'ugc-reel-1-a3b4c5' },
  { id: 'ugc-2', caption: 'Stacking huggies', titleId: 'ugc-title-2', imgId: 'ugc-reel-2-d6e7f8' },
  { id: 'ugc-3', caption: 'Date night ready', titleId: 'ugc-title-3', imgId: 'ugc-reel-3-g9h1i2' },
  { id: 'ugc-4', caption: 'Layered necklaces', titleId: 'ugc-title-4', imgId: 'ugc-reel-4-j3k4l5' },
  { id: 'ugc-5', caption: 'Gift-worthy', titleId: 'ugc-title-5', imgId: 'ugc-reel-5-m6n7o8' },
  { id: 'ugc-6', caption: 'Minimal elegance', titleId: 'ugc-title-6', imgId: 'ugc-reel-6-p9q1r2' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal text-center">
          As Seen On You
        </h2>
        <p className="mt-3 text-sm text-brand-muted text-center">Real moments, real style</p>
      </div>

      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {ugcItems.map((item) => (
          <div key={item.id} className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer">
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            {/* Caption */}
            <span id={item.titleId} className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
              {item.caption}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
