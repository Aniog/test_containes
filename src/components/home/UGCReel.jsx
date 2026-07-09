import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday staple"',
    handle: '@sofia.m',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    captionId: 'ugc-caption-1',
  },
  {
    id: 'ugc-2',
    caption: '"Perfect gift for her"',
    handle: '@claire.w',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    captionId: 'ugc-caption-2',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with these huggies"',
    handle: '@maya.r',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    captionId: 'ugc-caption-3',
  },
  {
    id: 'ugc-4',
    caption: '"Wore it to my wedding"',
    handle: '@anna.k',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    captionId: 'ugc-caption-4',
  },
  {
    id: 'ugc-5',
    caption: '"Stacks so beautifully"',
    handle: '@priya.s',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    captionId: 'ugc-caption-5',
  },
  {
    id: 'ugc-6',
    caption: '"Worth every penny"',
    handle: '@lea.b',
    imgId: 'ugc-img-6-p7q8r9',
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
    <section ref={containerRef} className="bg-cream py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-2">
              As Seen On
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink">
              The Velmora Community
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:block font-sans text-xs uppercase tracking-[0.15em] text-mist hover:text-gold transition-colors border-b border-mist/30 pb-0.5"
          >
            @velmora →
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 overflow-x-auto scroll-hide px-6 lg:px-12 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 relative w-44 lg:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">gold jewelry worn woman portrait</span>
            <span id={item.captionId} className="sr-only">{item.caption} {item.handle}</span>

            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [${item.titleId}]`}
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
              <p className="font-serif text-sm italic text-white leading-snug">
                {item.caption}
              </p>
              <p className="font-sans text-[11px] text-white/60 mt-1 tracking-wide">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
