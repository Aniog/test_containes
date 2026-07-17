import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday sparkle', imgId: 'ugc-reel-1-f3g4h5', captionId: 'ugc-caption-1' },
  { id: 'ugc-2', caption: 'Stacked & styled', imgId: 'ugc-reel-2-i6j7k8', captionId: 'ugc-caption-2' },
  { id: 'ugc-3', caption: 'Golden hour glow', imgId: 'ugc-reel-3-l9m0n1', captionId: 'ugc-caption-3' },
  { id: 'ugc-4', caption: 'Date night ready', imgId: 'ugc-reel-4-o2p3q4', captionId: 'ugc-caption-4' },
  { id: 'ugc-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-r5s6t7', captionId: 'ugc-caption-5' },
  { id: 'ugc-6', caption: 'Gift-worthy', imgId: 'ugc-reel-6-u8v9w0', captionId: 'ugc-caption-6' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal">Worn by You</h2>
          <p className="mt-2 text-sm text-brand-muted font-light">Real moments, real sparkle — tag @velmora</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 md:px-8 min-w-max">
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-44 md:w-52 aspect-[9/16] overflow-hidden group flex-shrink-0">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] woman wearing gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p id={item.captionId} className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
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
