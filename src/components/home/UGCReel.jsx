import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday gold', titleId: 'ugc-1-title', imgId: 'ugc-reel-1-a3b4c5' },
  { id: 'ugc-2', caption: 'Stacked & styled', titleId: 'ugc-2-title', imgId: 'ugc-reel-2-d6e7f8' },
  { id: 'ugc-3', caption: 'Gift-worthy', titleId: 'ugc-3-title', imgId: 'ugc-reel-3-g9h0i1' },
  { id: 'ugc-4', caption: 'Date night ready', titleId: 'ugc-4-title', imgId: 'ugc-reel-4-j2k3l4' },
  { id: 'ugc-5', caption: 'Minimal luxe', titleId: 'ugc-5-title', imgId: 'ugc-reel-5-m5n6o7' },
  { id: 'ugc-6', caption: 'Golden hour', titleId: 'ugc-6-title', imgId: 'ugc-reel-6-p8q9r0' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light text-center">
          As Seen On You
        </h2>
        <p id="ugc-section-title" className="mt-3 text-sm text-taupe font-sans text-center">
          Real women, real style — tag @velmora to be featured
        </p>
      </div>
      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-sand overflow-hidden snap-start group"
          >
            <img
              alt={item.caption}
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] [ugc-section-title] woman wearing gold jewelry`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
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
    </section>
  );
};

export default UGCReel;
