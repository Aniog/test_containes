import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', titleId: 'ugc-reel-1-title', imgId: 'ugc-reel-1-img-n1o2p3' },
  { id: 'reel-2', caption: 'Stacking season', titleId: 'ugc-reel-2-title', imgId: 'ugc-reel-2-img-q4r5s6' },
  { id: 'reel-3', caption: 'Golden hour', titleId: 'ugc-reel-3-title', imgId: 'ugc-reel-3-img-t7u8v9' },
  { id: 'reel-4', caption: 'Gift-worthy', titleId: 'ugc-reel-4-title', imgId: 'ugc-reel-4-img-w0x1y2' },
  { id: 'reel-5', caption: 'Date night ready', titleId: 'ugc-reel-5-title', imgId: 'ugc-reel-5-img-z3a4b5' },
  { id: 'reel-6', caption: 'Minimal luxe', titleId: 'ugc-reel-6-title', imgId: 'ugc-reel-6-img-c6d7e8' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-brand-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-espresso">As Worn by You</h2>
        <p className="text-sm text-brand-muted mt-2">Tag @velmora to be featured</p>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] bg-brand-ivory overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] gold jewelry worn on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-base text-white italic"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
