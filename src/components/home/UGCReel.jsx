import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-reel-img-a1b2c3',
    caption: 'My everyday stack',
    handle: '@sofia.m',
    titleId: 'ugc-1-title',
    descId: 'ugc-1-desc',
    descText: 'gold huggie earrings stacked on ear close up',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-reel-img-d4e5f6',
    caption: 'The perfect gift',
    handle: '@claire.w',
    titleId: 'ugc-2-title',
    descId: 'ugc-2-desc',
    descText: 'gold necklace pendant on woman neck editorial',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-reel-img-g7h8i9',
    caption: 'Obsessed with these',
    handle: '@maya.r',
    titleId: 'ugc-3-title',
    descId: 'ugc-3-desc',
    descText: 'gold drop earrings filigree close up woman',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-reel-img-j1k2l3',
    caption: 'Gifted myself',
    handle: '@anna.k',
    titleId: 'ugc-4-title',
    descId: 'ugc-4-desc',
    descText: 'gold ear cuff crystal jewelry portrait',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-reel-img-m4n5o6',
    caption: 'Wear it everywhere',
    handle: '@priya.s',
    titleId: 'ugc-5-title',
    descId: 'ugc-5-desc',
    descText: 'demi fine gold jewelry woman wearing necklace',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-reel-img-p7q8r9',
    caption: 'Stacking season',
    handle: '@luna.b',
    titleId: 'ugc-6-title',
    descId: 'ugc-6-desc',
    descText: 'gold jewelry stack earrings necklace woman',
  },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink font-300">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors items-center gap-2"
          >
            @velmora
            <span className="w-8 h-px bg-current inline-block" />
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 relative overflow-hidden group cursor-pointer"
            style={{ width: '160px', aspectRatio: '9/16', scrollSnapAlign: 'start' }}
          >
            {/* Background image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="320"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.caption} jewelry</span>
            <span id={item.descId} className="sr-only">{item.descText}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-sm text-cream italic leading-tight mb-0.5">
                "{item.caption}"
              </p>
              <p className="font-sans text-[9px] tracking-wider text-cream/60 uppercase">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
