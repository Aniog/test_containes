import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-img-1-a1b2c3',
    caption: 'My everyday stack',
    handle: '@sofia.m',
    titleId: 'ugc-1-title',
    captionId: 'ugc-1-caption',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-img-2-d4e5f6',
    caption: 'The perfect gift',
    handle: '@luna.wears',
    titleId: 'ugc-2-title',
    captionId: 'ugc-2-caption',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-img-3-g7h8i9',
    caption: 'Golden hour vibes',
    handle: '@claire.j',
    titleId: 'ugc-3-title',
    captionId: 'ugc-3-caption',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-img-4-j1k2l3',
    caption: 'Stacking season',
    handle: '@maya.style',
    titleId: 'ugc-4-title',
    captionId: 'ugc-4-caption',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-img-5-m4n5o6',
    caption: 'Gifted myself',
    handle: '@ava.luxe',
    titleId: 'ugc-5-title',
    captionId: 'ugc-5-caption',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-img-6-p7q8r9',
    caption: 'Obsessed with these',
    handle: '@nina.gold',
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
    <section className="bg-linen py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-obsidian">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs tracking-[0.15em] uppercase text-ink-muted hover:text-gold transition-colors duration-300 border-b border-sand pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 relative overflow-hidden group cursor-pointer"
            style={{ width: '160px', height: '284px', scrollSnapAlign: 'start' }}
          >
            {/* Background image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [${item.titleId}] woman wearing gold jewelry close up`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="320"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={item.captionId}
                className="font-cormorant text-sm italic text-cream leading-tight"
              >
                "{item.caption}"
              </p>
              <p
                id={item.titleId}
                className="font-manrope text-[10px] text-cream/60 mt-1"
              >
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
