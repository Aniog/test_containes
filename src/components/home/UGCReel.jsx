import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', titleId: 'ugc-1-title', imgId: 'ugc-img-1-x7y8z9' },
  { id: 'ugc-2', caption: 'Stacked & styled', titleId: 'ugc-2-title', imgId: 'ugc-img-2-a1b2c3' },
  { id: 'ugc-3', caption: 'Golden hour', titleId: 'ugc-3-title', imgId: 'ugc-img-3-d4e5f6' },
  { id: 'ugc-4', caption: 'Gift-worthy', titleId: 'ugc-4-title', imgId: 'ugc-img-4-g7h8i9' },
  { id: 'ugc-5', caption: 'Date night ready', titleId: 'ugc-5-title', imgId: 'ugc-img-5-j0k1l2' },
  { id: 'ugc-6', caption: 'Minimal luxe', titleId: 'ugc-6-title', imgId: 'ugc-img-6-m3n4o5' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 border-t border-brand-sand/60">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal">
            Worn by You
          </h2>
          <p className="text-sm text-brand-muted mt-2">@velmora on Instagram</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 md:px-8 min-w-max">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-44 md:w-52 aspect-[9/16] overflow-hidden group flex-shrink-0">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] [ugc-section-title] gold jewelry woman wearing`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p id={item.titleId} className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
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
