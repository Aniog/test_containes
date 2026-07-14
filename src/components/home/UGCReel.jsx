import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-a1b2c3', captionId: 'ugc-caption-1' },
  { id: 'ugc-2', caption: 'Stacked & styled', imgId: 'ugc-reel-2-d4e5f6', captionId: 'ugc-caption-2' },
  { id: 'ugc-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-g7h8i9', captionId: 'ugc-caption-3' },
  { id: 'ugc-4', caption: 'Date night ready', imgId: 'ugc-reel-4-j0k1l2', captionId: 'ugc-caption-4' },
  { id: 'ugc-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-m3n4o5', captionId: 'ugc-caption-5' },
  { id: 'ugc-6', caption: 'Golden hour', imgId: 'ugc-reel-6-p6q7r8', captionId: 'ugc-caption-6' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            As Seen On You
          </h2>
          <p className="mt-3 text-sm text-muted font-light">
            Real moments, real jewelry
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide px-4 md:px-8">
        <div className="flex gap-3 md:gap-4 w-max">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 aspect-[9/16] flex-shrink-0 overflow-hidden group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] [ugc-section-title] gold jewelry on woman`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={item.captionId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm italic text-cream/90"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
