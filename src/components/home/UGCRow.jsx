import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday staple"',
    handle: '@sofia.m',
    imgId: 'ugc-reel-1-a2b3c4',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    desc: 'gold huggie earrings worn on ear close up lifestyle',
  },
  {
    id: 'ugc-2',
    caption: '"Gifted this to my sister"',
    handle: '@claire.w',
    imgId: 'ugc-reel-2-d5e6f7',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    desc: 'gold necklace worn on neck woman lifestyle portrait',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with the quality"',
    handle: '@maya.r',
    imgId: 'ugc-reel-3-g8h9i1',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    desc: 'gold ear cuff crystal earring close up editorial',
  },
  {
    id: 'ugc-4',
    caption: '"Worth every penny"',
    handle: '@jess.k',
    imgId: 'ugc-reel-4-j2k3l4',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    desc: 'gold drop earrings filigree worn lifestyle woman',
  },
  {
    id: 'ugc-5',
    caption: '"The perfect gift set"',
    handle: '@anna.b',
    imgId: 'ugc-reel-5-m5n6o7',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    desc: 'jewelry gift box gold earrings necklace set luxury',
  },
  {
    id: 'ugc-6',
    caption: '"Stacking these daily"',
    handle: '@priya.s',
    imgId: 'ugc-reel-6-p8q9r1',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    desc: 'stacked gold earrings ear multiple piercings lifestyle',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className="font-inter text-[10px] uppercase tracking-widest text-gold mb-3">
              As Seen On
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-charcoal tracking-wide">
              Worn & Loved
            </h2>
          </div>
          <p className="font-inter text-xs text-mink">
            Tag us <span className="text-gold">@velmora</span> to be featured
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto pb-4 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 snap-start overflow-hidden group"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.caption}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-cormorant text-sm italic text-ivory leading-snug">
                {item.caption}
              </p>
              <p className="font-inter text-[10px] text-ivory/60 mt-1">{item.handle}</p>
            </div>

            {/* Instagram icon overlay */}
            <div className="absolute top-3 right-3 opacity-60">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
