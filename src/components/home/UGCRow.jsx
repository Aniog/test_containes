import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-img-1-a1b2c3',
    caption: 'My everyday stack',
    sub: '@maya.wears',
    titleId: 'ugc-1-title',
    descId: 'ugc-1-desc',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-img-2-d4e5f6',
    caption: 'The perfect gift',
    sub: '@stellajewels',
    titleId: 'ugc-2-title',
    descId: 'ugc-2-desc',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-img-3-g7h8i9',
    caption: 'Obsessed with these huggies',
    sub: '@nour.style',
    titleId: 'ugc-3-title',
    descId: 'ugc-3-desc',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-img-4-j1k2l3',
    caption: 'Brunch ready ✨',
    sub: '@lilyandco',
    titleId: 'ugc-4-title',
    descId: 'ugc-4-desc',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-img-5-m4n5o6',
    caption: 'Gifted myself this necklace',
    sub: '@amara.looks',
    titleId: 'ugc-5-title',
    descId: 'ugc-5-desc',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-img-6-p7q8r9',
    caption: 'Ear party goals',
    sub: '@zoe.edits',
    titleId: 'ugc-6-title',
    descId: 'ugc-6-desc',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-2">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs tracking-[0.15em] uppercase text-muted hover:text-gold transition-colors border-b border-stone/50 hover:border-gold pb-0.5 hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">gold jewelry worn woman portrait</span>
            <span id={item.descId} className="sr-only">{item.caption} fine jewelry earrings necklace</span>

            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velvet/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-cormorant text-sm italic text-cream leading-tight mb-0.5">
                "{item.caption}"
              </p>
              <p className="font-manrope text-[10px] text-cream/60 tracking-wide">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
