import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-a1b2c3', titleId: 'ugc-reel-1-title' },
  { id: 'reel-2', caption: 'Stacking huggies', imgId: 'ugc-reel-2-d4e5f6', titleId: 'ugc-reel-2-title' },
  { id: 'reel-3', caption: 'Date night ready', imgId: 'ugc-reel-3-g7h8i9', titleId: 'ugc-reel-3-title' },
  { id: 'reel-4', caption: 'Gift unboxing', imgId: 'ugc-reel-4-j0k1l2', titleId: 'ugc-reel-4-title' },
  { id: 'reel-5', caption: 'Layered necklaces', imgId: 'ugc-reel-5-m3n4o5', titleId: 'ugc-reel-5-title' },
  { id: 'reel-6', caption: 'Morning glow', imgId: 'ugc-reel-6-p6q7r8', titleId: 'ugc-reel-6-title' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal text-center">
          Worn by You
        </h2>
        <p className="mt-3 text-sm text-muted text-center">Real moments, real gold</p>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto px-6 md:px-12 lg:px-20 pb-4 scrollbar-hide">
        {reels.map(reel => (
          <div key={reel.id} className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden group">
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] woman wearing gold jewelry`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <p id={reel.titleId} className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
