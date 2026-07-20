import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Morning light, golden glow',
    imgId: 'ugc-ear-gold-1',
  },
  {
    id: 'ugc-2',
    caption: 'Stack and shine',
    imgId: 'ugc-ear-stack-2',
  },
  {
    id: 'ugc-3',
    caption: 'Date night essentials',
    imgId: 'ugc-necklace-date-3',
  },
  {
    id: 'ugc-4',
    caption: 'Effortless elegance',
    imgId: 'ugc-ear-elegant-4',
  },
  {
    id: 'ugc-5',
    caption: 'Golden hour glow',
    imgId: 'ugc-ear-golden-5',
  },
  {
    id: 'ugc-6',
    caption: 'Layered perfection',
    imgId: 'ugc-necklace-layer-6',
  },
  {
    id: 'ugc-7',
    caption: 'Self-care sparkle',
    imgId: 'ugc-ear-sparkle-7',
  },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-950 mb-3">
            Styled by You
          </h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mb-4" />
          <p className="font-sans text-sm text-stone-500">
            Tag us @velmorajewelry to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8">
        <div className="flex gap-3 md:gap-4 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-36 md:w-44 aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`${item.caption} woman wearing gold jewelry closeup ear necklace`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />

              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-serif text-xs md:text-sm text-cream-50 leading-snug italic">
                  {item.caption}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-stone-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
