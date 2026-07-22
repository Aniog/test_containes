import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-a2b3c4', titleId: 'ugc-reel-1-caption' },
  { id: 'reel-2', caption: 'Stacking season', imgId: 'ugc-reel-2-d5e6f7', titleId: 'ugc-reel-2-caption' },
  { id: 'reel-3', caption: 'Date night ready', imgId: 'ugc-reel-3-g8h9i0', titleId: 'ugc-reel-3-caption' },
  { id: 'reel-4', caption: 'Gifted & loved', imgId: 'ugc-reel-4-j1k2l3', titleId: 'ugc-reel-4-caption' },
  { id: 'reel-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-m4n5o6', titleId: 'ugc-reel-5-caption' },
  { id: 'reel-6', caption: 'Golden hour', imgId: 'ugc-reel-6-p7q8r9', titleId: 'ugc-reel-6-caption' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl text-brand-charcoal font-light">
            As Seen On You
          </h2>
          <p className="text-sm text-brand-muted font-sans mt-3">Real moments, real gold</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ width: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] [ugc-section-title] woman wearing gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span
                id={reel.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
              >
                {reel.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
