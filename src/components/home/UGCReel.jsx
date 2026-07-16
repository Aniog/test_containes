import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday sparkle', titleId: 'ugc-1-title', imgId: 'ugc-reel-1-k3m9p2' },
  { id: 'ugc-2', caption: 'Stacked & styled', titleId: 'ugc-2-title', imgId: 'ugc-reel-2-q7w4e1' },
  { id: 'ugc-3', caption: 'Golden hour', titleId: 'ugc-3-title', imgId: 'ugc-reel-3-r8t5y2' },
  { id: 'ugc-4', caption: 'Gift-worthy', titleId: 'ugc-4-title', imgId: 'ugc-reel-4-u6i3o9' },
  { id: 'ugc-5', caption: 'Minimal luxe', titleId: 'ugc-5-title', imgId: 'ugc-reel-5-p1a8s4' },
  { id: 'ugc-6', caption: 'Date night ready', titleId: 'ugc-6-title', imgId: 'ugc-reel-6-d2f7g5' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal text-center">
          As Seen On You
        </h2>
        <p className="mt-3 font-sans text-sm text-brand-muted text-center">Real moments, real jewelry</p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
        {ugcItems.map(item => (
          <div key={item.id} className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden bg-brand-ivory group cursor-pointer">
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] woman wearing gold jewelry close up portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span id={item.titleId} className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
              {item.caption}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
