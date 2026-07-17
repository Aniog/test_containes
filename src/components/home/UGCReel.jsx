import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'The perfect everyday ear stack',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    query: 'woman wearing gold earrings ear stack close up',
  },
  {
    id: 'ugc-2',
    caption: 'Golden hour, golden jewelry',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    query: 'woman gold necklace pendant golden hour portrait',
  },
  {
    id: 'ugc-3',
    caption: 'Gifted myself. No regrets.',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    query: 'woman huggie earrings close up ear jewelry',
  },
  {
    id: 'ugc-4',
    caption: 'Layering season is always',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    query: 'woman layered gold necklaces neck jewelry editorial',
  },
  {
    id: 'ugc-5',
    caption: 'Minimal. Intentional. Gold.',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    query: 'woman minimal gold jewelry portrait editorial',
  },
  {
    id: 'ugc-6',
    caption: 'The gift she actually wanted',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    query: 'gold jewelry gift box luxury packaging',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-velmora-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-velmora-gold mb-3 font-medium">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-obsidian tracking-wide">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="/"
            className="text-xs uppercase tracking-widest text-velmora-slate hover:text-velmora-gold transition-colors font-medium hidden md:block"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="flex gap-4 overflow-x-auto pb-4 px-6 md:px-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-44 md:w-52 snap-start relative overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.query}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm font-light italic text-velmora-cream leading-snug">
                "{item.caption}"
              </p>
            </div>

            {/* Instagram-style play indicator */}
            <div className="absolute top-3 right-3 opacity-60">
              <div className="w-5 h-5 border border-velmora-cream/60 rounded-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-velmora-cream/80 ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
