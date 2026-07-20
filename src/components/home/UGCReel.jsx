import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday sparkle', titleId: 'ugc-1-title', imgId: 'ugc-reel-1-a2b3c4' },
  { id: 'ugc-2', caption: 'Stacking season', titleId: 'ugc-2-title', imgId: 'ugc-reel-2-d5e6f7' },
  { id: 'ugc-3', caption: 'Golden hour', titleId: 'ugc-3-title', imgId: 'ugc-reel-3-g8h9i0' },
  { id: 'ugc-4', caption: 'Gift-worthy', titleId: 'ugc-4-title', imgId: 'ugc-reel-4-j1k2l3' },
  { id: 'ugc-5', caption: 'Date night ready', titleId: 'ugc-5-title', imgId: 'ugc-reel-5-m4n5o6' },
  { id: 'ugc-6', caption: 'Minimal luxe', titleId: 'ugc-6-title', imgId: 'ugc-reel-6-p7q8r9' },
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
          <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal">
            As Seen On You
          </h2>
          <p className="mt-3 text-sm text-brand-muted">
            Real moments, real sparkle — tag @velmora to be featured
          </p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide px-4 md:px-8">
        <div className="flex gap-4 w-max">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] woman wearing gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span
                id={item.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
              >
                {item.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
