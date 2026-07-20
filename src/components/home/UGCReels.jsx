import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', titleId: 'ugc-reel-1-title', imgId: 'ugc-reel-1-img-a1b2' },
  { id: 'reel-2', caption: 'Stacking season', titleId: 'ugc-reel-2-title', imgId: 'ugc-reel-2-img-c3d4' },
  { id: 'reel-3', caption: 'Gift-worthy', titleId: 'ugc-reel-3-title', imgId: 'ugc-reel-3-img-e5f6' },
  { id: 'reel-4', caption: 'Golden hour', titleId: 'ugc-reel-4-title', imgId: 'ugc-reel-4-img-g7h8' },
  { id: 'reel-5', caption: 'Date night ready', titleId: 'ugc-reel-5-title', imgId: 'ugc-reel-5-img-i9j0' },
  { id: 'reel-6', caption: 'Minimal luxe', titleId: 'ugc-reel-6-title', imgId: 'ugc-reel-6-img-k1l2' },
];

const UGCReels = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            As Seen On You
          </h2>
          <p className="mt-3 text-sm text-brand-muted font-sans">
            Real moments, real style. Tag @velmora to be featured.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto hide-scrollbar px-4 md:px-8">
        <div className="flex gap-4 w-max">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-44 md:w-52 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] woman wearing gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* Caption */}
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

export default UGCReels;
