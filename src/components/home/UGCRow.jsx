import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'The perfect everyday earring',
    handle: '@sophiamarie',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    captionId: 'ugc-caption-1',
  },
  {
    id: 'ugc-2',
    caption: 'Gifted myself the heirloom set ✨',
    handle: '@claireelise',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    captionId: 'ugc-caption-2',
  },
  {
    id: 'ugc-3',
    caption: 'Stacking these all summer',
    handle: '@nataliarose',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    captionId: 'ugc-caption-3',
  },
  {
    id: 'ugc-4',
    caption: 'My go-to necklace for everything',
    handle: '@emilyjane',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    captionId: 'ugc-caption-4',
  },
  {
    id: 'ugc-5',
    caption: 'Obsessed with these huggies',
    handle: '@isabellav',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    captionId: 'ugc-caption-5',
  },
  {
    id: 'ugc-6',
    caption: 'Velmora never misses',
    handle: '@lunacraft',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    captionId: 'ugc-caption-6',
  },
];

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-24 bg-cream overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
              As Seen On
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-inter text-xs uppercase tracking-[0.12em] text-stone hover:text-gold transition-colors duration-200 border-b border-stone/30 hover:border-gold pb-0.5 self-start md:self-auto"
          >
            @velmora on Instagram
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Hidden text for image query */}
            <span id={item.titleId} className="hidden">gold jewelry worn on model</span>
            <span id={item.captionId} className="hidden">{item.caption}</span>

            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [${item.titleId}] gold jewelry worn editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-cormorant text-sm italic text-ivory leading-snug">
                "{item.caption}"
              </p>
              <p className="font-inter text-[10px] text-ivory/60 mt-1">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
