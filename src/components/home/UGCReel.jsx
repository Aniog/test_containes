import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday Gold', titleId: 'ugc-reel-1-title', imgId: 'ugc-reel-img-1-q2w3e4' },
  { id: 'reel-2', caption: 'Stacked & Styled', titleId: 'ugc-reel-2-title', imgId: 'ugc-reel-img-2-r5t6y7' },
  { id: 'reel-3', caption: 'Gift Worthy', titleId: 'ugc-reel-3-title', imgId: 'ugc-reel-img-3-u8i9o0' },
  { id: 'reel-4', caption: 'Date Night', titleId: 'ugc-reel-4-title', imgId: 'ugc-reel-img-4-p1a2s3' },
  { id: 'reel-5', caption: 'Minimal Luxe', titleId: 'ugc-reel-5-title', imgId: 'ugc-reel-img-5-d4f5g6' },
  { id: 'reel-6', caption: 'Golden Hour', titleId: 'ugc-reel-6-title', imgId: 'ugc-reel-img-6-h7j8k9' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal text-center">
          As Worn by You
        </h2>
        <p className="mt-3 text-sm text-brand-muted text-center">Tag @velmora to be featured</p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer">
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] woman wearing gold jewelry`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
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
