import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', titleId: 'reel-1-title', imgId: 'ugc-reel-1-a1b2c3' },
  { id: 'reel-2', caption: 'Stacking season', titleId: 'reel-2-title', imgId: 'ugc-reel-2-d4e5f6' },
  { id: 'reel-3', caption: 'Gift-worthy', titleId: 'reel-3-title', imgId: 'ugc-reel-3-g7h8i9' },
  { id: 'reel-4', caption: 'Golden hour', titleId: 'reel-4-title', imgId: 'ugc-reel-4-j0k1l2' },
  { id: 'reel-5', caption: 'Date night ready', titleId: 'reel-5-title', imgId: 'ugc-reel-5-m3n4o5' },
  { id: 'reel-6', caption: 'Minimal luxe', titleId: 'reel-6-title', imgId: 'ugc-reel-6-p6q7r8' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light">
            As Seen On You
          </h2>
          <p className="mt-3 font-sans text-sm text-brand-muted">
            @velmora — Tag us to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-44 md:w-52 aspect-[9/16] bg-brand-sand overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] gold jewelry woman wearing`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p
                  id={reel.titleId}
                  className="font-serif text-sm text-white italic"
                >
                  {reel.caption}
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
