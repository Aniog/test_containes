import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', titleId: 'ugc-reel-1-title', imgId: 'ugc-reel-1-img-a1b2' },
  { id: 'reel-2', caption: 'Stacking season', titleId: 'ugc-reel-2-title', imgId: 'ugc-reel-2-img-c3d4' },
  { id: 'reel-3', caption: 'Golden hour', titleId: 'ugc-reel-3-title', imgId: 'ugc-reel-3-img-e5f6' },
  { id: 'reel-4', caption: 'Gift-worthy', titleId: 'ugc-reel-4-title', imgId: 'ugc-reel-4-img-g7h8' },
  { id: 'reel-5', caption: 'Date night ready', titleId: 'ugc-reel-5-title', imgId: 'ugc-reel-5-img-i9j0' },
  { id: 'reel-6', caption: 'Minimal luxe', titleId: 'ugc-reel-6-title', imgId: 'ugc-reel-6-img-k1l2' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-brand-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal">
            Worn by You
          </h2>
          <p className="mt-3 text-sm text-brand-muted">Real moments, real sparkle</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map((reel) => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group">
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p id={reel.titleId} className="font-serif text-sm text-white italic">
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
