import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: '"My everyday earrings — I never take them off"', author: '@sarah.m' },
  { id: 'ugc-2', caption: '"The perfect gift for my best friend"', author: '@emma.l' },
  { id: 'ugc-3', caption: '"Looks so much more expensive than it is"', author: '@jessica.r' },
  { id: 'ugc-4', caption: '"Obsessed with the quality"', author: '@olivia.k' },
  { id: 'ugc-5', caption: '"Finally, jewelry that doesn\'t irritate my skin"', author: '@mia.t' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-stone-50 overflow-hidden">
      <div className="container-padding mb-8 md:mb-10">
        <h2 id="as-worn-title" className="serif-heading text-2xl md:text-3xl text-center text-stone-800 mb-2">As Worn By You</h2>
        <p className="text-sm text-stone-500 text-center">Tag @velmorajewelry to be featured</p>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 sm:w-56 md:w-64 snap-start"
          >
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-stone-300">
              <div
                className="absolute inset-0"
                data-strk-bg-id={`ugc-bg-${item.id}`}
                data-strk-bg={`[${item.id}-caption] [${item.id}-author] [as-worn-title]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <p id={`${item.id}-caption`} className="serif-heading text-sm italic leading-relaxed mb-1">{item.caption}</p>
                <p id={`${item.id}-author`} className="text-xs text-white/70">{item.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
