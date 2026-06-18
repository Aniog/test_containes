import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-reel-img1-a1b2c3',
    caption: 'My everyday stack',
    handle: '@sofia.m',
    titleId: 'ugc-1-title',
    captionId: 'ugc-1-caption',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-reel-img2-d4e5f6',
    caption: 'The perfect gift',
    handle: '@claire.w',
    titleId: 'ugc-2-title',
    captionId: 'ugc-2-caption',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-reel-img3-g7h8i9',
    caption: 'Obsessed with these huggies',
    handle: '@maya.r',
    titleId: 'ugc-3-title',
    captionId: 'ugc-3-caption',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-reel-img4-j1k2l3',
    caption: 'Wearing it every day',
    handle: '@anna.k',
    titleId: 'ugc-4-title',
    captionId: 'ugc-4-caption',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-reel-img5-m4n5o6',
    caption: 'Gifted myself this necklace',
    handle: '@priya.s',
    titleId: 'ugc-5-title',
    captionId: 'ugc-5-caption',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-reel-img6-p7q8r9',
    caption: 'Stacking season',
    handle: '@luna.b',
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
    <section ref={containerRef} className="bg-linen py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-2">
              Community
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">
              As Worn By You
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs uppercase tracking-widest text-stone hover:text-gold transition-colors border-b border-stone/30 hover:border-gold pb-0.5 hidden md:block"
          >
            @velmora →
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] woman wearing gold jewelry portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={item.captionId}
                className="font-cormorant text-sm italic text-ivory leading-tight"
              >
                "{item.caption}"
              </p>
              <p
                id={item.titleId}
                className="font-manrope text-[10px] text-ivory/60 mt-1 uppercase tracking-widest"
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
