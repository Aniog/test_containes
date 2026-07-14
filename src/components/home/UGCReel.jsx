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
    descId: 'ugc-desc-1',
    title: 'Gold huggie earrings worn on ear close-up',
    desc: 'Everyday gold jewelry minimal style',
  },
  {
    id: 'ugc-2',
    caption: '"Perfect gift for her"',
    handle: '@claire.w',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    title: 'Gold necklace worn on neck editorial',
    desc: 'Delicate gold necklace gift jewelry',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with these"',
    handle: '@maya.r',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    title: 'Crystal earrings close-up portrait',
    desc: 'Crystal drop earrings gold jewelry portrait',
  },
  {
    id: 'ugc-4',
    caption: '"Wore these to my wedding"',
    handle: '@anna.k',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    title: 'Bridal gold jewelry earrings necklace set',
    desc: 'Wedding jewelry gold set elegant',
  },
  {
    id: 'ugc-5',
    caption: '"Stacking goals ✨"',
    handle: '@priya.s',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    title: 'Stacked gold earrings multiple piercings',
    desc: 'Ear stack gold jewelry multiple earrings',
  },
  {
    id: 'ugc-6',
    caption: '"Gifted myself, no regrets"',
    handle: '@leila.b',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    title: 'Gold filigree earrings portrait warm light',
    desc: 'Filigree drop earrings gold warm editorial',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 lg:py-24 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-sans tracking-widest uppercase text-gold mb-2 font-medium">
              As Worn By You
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light text-obsidian">
              The Velmora Edit
            </h2>
          </div>
          <p className="text-xs font-sans text-muted tracking-wide hidden md:block">
            Tag us <span className="text-gold">@velmora</span>
          </p>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-4 overflow-x-auto scroll-hide px-6 lg:px-10 pb-4">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.title}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-display text-sm italic text-ivory leading-snug mb-1">
                {item.caption}
              </p>
              <p className="text-[10px] font-sans text-ivory/60 tracking-wide">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
