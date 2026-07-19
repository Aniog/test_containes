import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', imgId: 'ugc-reel-1-h4i5j6', titleId: 'ugc-reel-1-caption' },
  { id: 'reel-2', caption: 'Stacking season', imgId: 'ugc-reel-2-k7l8m9', titleId: 'ugc-reel-2-caption' },
  { id: 'reel-3', caption: 'Golden hour', imgId: 'ugc-reel-3-n0o1p2', titleId: 'ugc-reel-3-caption' },
  { id: 'reel-4', caption: 'Gift-worthy', imgId: 'ugc-reel-4-q3r4s5', titleId: 'ugc-reel-4-caption' },
  { id: 'reel-5', caption: 'Date night ready', imgId: 'ugc-reel-5-t6u7v8', titleId: 'ugc-reel-5-caption' },
  { id: 'reel-6', caption: 'Minimal luxe', imgId: 'ugc-reel-6-w9x0y1', titleId: 'ugc-reel-6-caption' },
];

const UGCReels = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            Worn by You
          </h2>
          <p className="font-sans text-sm text-warm-gray mt-2">Tag @velmora to be featured</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map((reel) => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] [ugc-section-title] woman wearing gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p id={reel.titleId} className="absolute bottom-4 left-4 right-4 font-serif text-sm italic text-cream">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReels;
