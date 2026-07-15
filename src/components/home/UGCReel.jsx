import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Golden hour, golden ears',
    handle: '@sofiamartin',
    imgId: 'ugc-reel-1-a1b2c3',
    titleId: 'ugc-1-title',
    captionId: 'ugc-1-caption',
  },
  {
    id: 'ugc-2',
    caption: 'My everyday stack',
    handle: '@emmawilson',
    imgId: 'ugc-reel-2-d4e5f6',
    titleId: 'ugc-2-title',
    captionId: 'ugc-2-caption',
  },
  {
    id: 'ugc-3',
    caption: 'The necklace I never take off',
    handle: '@clairedumont',
    imgId: 'ugc-reel-3-g7h8i9',
    titleId: 'ugc-3-title',
    captionId: 'ugc-3-caption',
  },
  {
    id: 'ugc-4',
    caption: 'Gift from myself to myself',
    handle: '@isabellachen',
    imgId: 'ugc-reel-4-j1k2l3',
    titleId: 'ugc-4-title',
    captionId: 'ugc-4-caption',
  },
  {
    id: 'ugc-5',
    caption: 'Brunch-ready jewels',
    handle: '@natalierosse',
    imgId: 'ugc-reel-5-m4n5o6',
    titleId: 'ugc-5-title',
    captionId: 'ugc-5-caption',
  },
  {
    id: 'ugc-6',
    caption: 'Stacking season',
    handle: '@lunapark',
    imgId: 'ugc-reel-6-p7q8r9',
    titleId: 'ugc-6-title',
    captionId: 'ugc-6-caption',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gold font-sans mb-2">Community</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso">As Worn By You</h2>
          </div>
          <a
            href="#"
            className="text-xs uppercase tracking-widest text-stone font-sans border-b border-stone/40 pb-0.5 hover:text-espresso hover:border-espresso transition-colors duration-300 hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 snap-start overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [${item.titleId}] gold jewelry worn woman`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text refs */}
            <span id={item.titleId} className="sr-only">Velmora jewelry worn by customer</span>
            <span id={item.captionId} className="sr-only">{item.caption}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-sm italic text-ivory leading-snug">"{item.caption}"</p>
              <p className="text-[9px] text-ivory/60 font-sans mt-1 uppercase tracking-widest">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
