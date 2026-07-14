import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', imgId: 'ugc-reel-1-n4o5p6', titleId: 'ugc-1-caption' },
  { id: 'ugc-2', caption: 'Stacking season', imgId: 'ugc-reel-2-q7r8s9', titleId: 'ugc-2-caption' },
  { id: 'ugc-3', caption: 'Golden hour', imgId: 'ugc-reel-3-t1u2v3', titleId: 'ugc-3-caption' },
  { id: 'ugc-4', caption: 'Gift-worthy', imgId: 'ugc-reel-4-w4x5y6', titleId: 'ugc-4-caption' },
  { id: 'ugc-5', caption: 'Date night ready', imgId: 'ugc-reel-5-z7a8b9', titleId: 'ugc-5-caption' },
  { id: 'ugc-6', caption: 'Minimal luxe', imgId: 'ugc-reel-6-c1d2e3', titleId: 'ugc-6-caption' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">As Seen On</h2>
          <p className="mt-3 text-sm text-stone">Real women, real moments</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] woman wearing gold jewelry close up portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
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
