import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden Hour Glow', query: 'gold earring closeup ear warm lighting' },
  { id: 'ugc-2', caption: 'Everyday Elegance', query: 'gold huggie hoop earrings on ear' },
  { id: 'ugc-3', caption: 'Layered & Loved', query: 'gold necklace layered on neck model' },
  { id: 'ugc-4', caption: 'Crystal Clear', query: 'crystal earring closeup warm light' },
  { id: 'ugc-5', caption: 'Treasured Moments', query: 'gold jewelry gift set elegant' },
  { id: 'ugc-6', caption: 'Quiet Luxury', query: 'minimal gold jewelry on skin closeup' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-charcoal-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-10 md:mb-14 px-4">
          <p className="text-xs tracking-widest-2xl uppercase text-gold-300 font-sans font-medium mb-3">
            @velmora
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50">
            As Seen on You
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 md:gap-4 px-4 md:px-8 pb-2" style={{ width: 'max-content' }}>
            {ugcItems.map((item, idx) => (
              <div
                key={item.id}
                className="relative w-[200px] md:w-[240px] h-[350px] md:h-[420px] rounded-lg overflow-hidden flex-shrink-0 group"
              >
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="480"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${item.id}`}
                  className="absolute bottom-4 left-4 right-4 font-serif text-base text-cream-50 leading-snug"
                >
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
