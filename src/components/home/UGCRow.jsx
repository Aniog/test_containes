import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    caption: 'Morning light, golden layers',
    imgId: 'ugc-reel-img-r1a2b3',
    titleId: 'ugc-reel-1-title',
    descId: 'ugc-reel-1-desc',
    desc: 'gold necklace layered on neck morning light editorial',
  },
  {
    id: 'reel-2',
    caption: 'The ear stack of dreams',
    imgId: 'ugc-reel-img-r4c5d6',
    titleId: 'ugc-reel-2-title',
    descId: 'ugc-reel-2-desc',
    desc: 'gold earrings ear stack huggie cuff editorial portrait',
  },
  {
    id: 'reel-3',
    caption: 'Gift her something timeless',
    imgId: 'ugc-reel-img-r7e8f9',
    titleId: 'ugc-reel-3-title',
    descId: 'ugc-reel-3-desc',
    desc: 'jewelry gift box gold earrings necklace set luxury',
  },
  {
    id: 'reel-4',
    caption: 'Effortless every day',
    imgId: 'ugc-reel-img-r2g3h4',
    titleId: 'ugc-reel-4-title',
    descId: 'ugc-reel-4-desc',
    desc: 'woman wearing gold jewelry casual editorial lifestyle',
  },
  {
    id: 'reel-5',
    caption: 'Details that define you',
    imgId: 'ugc-reel-img-r5i6j7',
    titleId: 'ugc-reel-5-title',
    descId: 'ugc-reel-5-desc',
    desc: 'close up gold earring crystal detail luxury jewelry',
  },
  {
    id: 'reel-6',
    caption: 'Wear it your way',
    imgId: 'ugc-reel-img-r8k9l0',
    titleId: 'ugc-reel-6-title',
    descId: 'ugc-reel-6-desc',
    desc: 'gold huggie earrings worn model portrait warm light',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.15em] text-gold mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-espresso tracking-wide">
              The Velmora Edit
            </h2>
          </div>
          <p className="font-sans text-xs uppercase tracking-[0.1em] text-stone hidden md:block">
            @velmora
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-56 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Hidden text for image queries */}
            <span id={reel.titleId} className="sr-only">{reel.caption}</span>
            <span id={reel.descId} className="sr-only">{reel.desc}</span>

            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-3 right-3 font-serif text-sm italic text-ivory leading-snug">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
