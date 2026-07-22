import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Gold earrings everyday elegance', titleId: 'ugc-reel-1-title', imgId: 'ugc-reel-1-img-a1b2' },
  { id: 'reel-2', caption: 'Layered gold necklaces on neck', titleId: 'ugc-reel-2-title', imgId: 'ugc-reel-2-img-c3d4' },
  { id: 'reel-3', caption: 'Gold jewelry gift box unwrapping', titleId: 'ugc-reel-3-title', imgId: 'ugc-reel-3-img-e5f6' },
  { id: 'reel-4', caption: 'Gold hoop earrings golden hour', titleId: 'ugc-reel-4-title', imgId: 'ugc-reel-4-img-g7h8' },
  { id: 'reel-5', caption: 'Woman wearing gold pendant necklace', titleId: 'ugc-reel-5-title', imgId: 'ugc-reel-5-img-i9j0' },
  { id: 'reel-6', caption: 'Stacked gold rings and bracelets', titleId: 'ugc-reel-6-title', imgId: 'ugc-reel-6-img-k1l2' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal text-center">
          Worn by You
        </h2>
        <p className="mt-3 text-sm text-brand-muted text-center">Real moments, real jewelry</p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-sm overflow-hidden snap-start group"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] [ugc-section-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
