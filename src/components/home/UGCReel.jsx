import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday staple"',
    handle: '@sofia.m',
    imgId: 'ugc-img-1-a4b7c2',
    titleId: 'ugc-title-1',
    captionId: 'ugc-caption-1',
  },
  {
    id: 'ugc-2',
    caption: '"Perfect gift for her"',
    handle: '@the.golden.edit',
    imgId: 'ugc-img-2-d8e3f1',
    titleId: 'ugc-title-2',
    captionId: 'ugc-caption-2',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with these huggies"',
    handle: '@lena.wears',
    imgId: 'ugc-img-3-g5h9i4',
    titleId: 'ugc-title-3',
    captionId: 'ugc-caption-3',
  },
  {
    id: 'ugc-4',
    caption: '"Feels so luxurious"',
    handle: '@mia.style',
    imgId: 'ugc-img-4-j2k6l8',
    titleId: 'ugc-title-4',
    captionId: 'ugc-caption-4',
  },
  {
    id: 'ugc-5',
    caption: '"Worth every penny"',
    handle: '@claire.jewels',
    imgId: 'ugc-img-5-m1n5o7',
    titleId: 'ugc-title-5',
    captionId: 'ugc-caption-5',
  },
  {
    id: 'ugc-6',
    caption: '"Stacking these forever"',
    handle: '@ava.luxe',
    imgId: 'ugc-img-6-p3q8r2',
    titleId: 'ugc-title-6',
    captionId: 'ugc-caption-6',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-[0.15em] text-gold mb-3">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-obsidian">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-manrope text-xs uppercase tracking-[0.12em] text-muted border-b border-muted pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto pb-4 px-4 md:px-8 scroll-snap-x hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 scroll-snap-start overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Background image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] gold jewelry worn woman portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.captionId}
                className="font-cormorant text-sm italic text-parchment leading-snug mb-1"
              >
                {item.caption}
              </p>
              <span
                id={item.titleId}
                className="font-manrope text-[10px] text-parchment/60 tracking-wide"
              >
                {item.handle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
