import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', titleId: 'reel-1-title', imgId: 'ugc-reel-1-n4o5p6' },
  { id: 'reel-2', caption: 'Stacked & styled', titleId: 'reel-2-title', imgId: 'ugc-reel-2-q7r8s9' },
  { id: 'reel-3', caption: 'Gift-worthy', titleId: 'reel-3-title', imgId: 'ugc-reel-3-t1u2v3' },
  { id: 'reel-4', caption: 'Golden hour', titleId: 'reel-4-title', imgId: 'ugc-reel-4-w4x5y6' },
  { id: 'reel-5', caption: 'Date night ready', titleId: 'reel-5-title', imgId: 'ugc-reel-5-z7a8b9' },
  { id: 'reel-6', caption: 'Minimal luxe', titleId: 'reel-6-title', imgId: 'ugc-reel-6-c1d2e3' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl text-espresso">
            As Worn by You
          </h2>
          <p className="mt-3 text-sm text-stone-500">Tag @velmora to be featured</p>
        </div>

        <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-4">
          {reels.map(reel => (
            <div key={reel.id} className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer">
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] [ugc-section-title] gold jewelry worn on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
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
