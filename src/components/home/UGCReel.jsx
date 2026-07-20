import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    imgId: 'ugc-reel-1-a2b3c4',
    caption: '"My everyday gold"',
    user: '@sofiamartin',
    titleId: 'reel-1-title',
    descId: 'reel-1-desc',
  },
  {
    id: 'reel-2',
    imgId: 'ugc-reel-2-d5e6f7',
    caption: '"Perfect gift for her"',
    user: '@emmawilson',
    titleId: 'reel-2-title',
    descId: 'reel-2-desc',
  },
  {
    id: 'reel-3',
    imgId: 'ugc-reel-3-g8h9i1',
    caption: '"Obsessed with these huggies"',
    user: '@clairedumont',
    titleId: 'reel-3-title',
    descId: 'reel-3-desc',
  },
  {
    id: 'reel-4',
    imgId: 'ugc-reel-4-j2k3l4',
    caption: '"Wore it to the gala"',
    user: '@isabellachen',
    titleId: 'reel-4-title',
    descId: 'reel-4-desc',
  },
  {
    id: 'reel-5',
    imgId: 'ugc-reel-5-m5n6o7',
    caption: '"Stacking goals ✨"',
    user: '@natalierosse',
    titleId: 'reel-5-title',
    descId: 'reel-5-desc',
  },
  {
    id: 'reel-6',
    imgId: 'ugc-reel-6-p8q9r1',
    caption: '"Gifted myself this"',
    user: '@laurabennett',
    titleId: 'reel-6-title',
    descId: 'reel-6-desc',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-3">
              As Worn By You
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
              The Velmora Edit
            </h2>
          </div>
          <p className="font-inter text-xs tracking-widest uppercase text-mist hidden md:block">
            #VelmoraWoman
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12 pb-2">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Hidden text for image query */}
            <span id={reel.titleId} className="sr-only">gold jewelry worn on model</span>
            <span id={reel.descId} className="sr-only">woman wearing Velmora fine jewelry earrings necklace</span>

            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-cormorant text-sm italic text-cream leading-snug mb-1">
                {reel.caption}
              </p>
              <p className="font-inter text-[10px] text-cream/60 tracking-wide">
                {reel.user}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
