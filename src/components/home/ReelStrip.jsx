import { useRef } from 'react';
import strkImgConfig from '@/strk-img-config.json';

const REELS = [
  { id: 'reel-1', caption: '@maya.r styles the Vivid Aura cuff', captionId: 'reel-caption-1' },
  { id: 'reel-2', caption: 'Layered in Flora Nectar', captionId: 'reel-caption-2' },
  { id: 'reel-3', caption: 'Golden Sphere kind of day', captionId: 'reel-caption-3' },
  { id: 'reel-4', caption: 'Ear candy season', captionId: 'reel-caption-4' },
  { id: 'reel-5', caption: 'Gift-ready sets', captionId: 'reel-caption-5' },
];

const FALLBACK_SRC =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function getImageUrl(imageId) {
  const entry = strkImgConfig[imageId];
  return entry?.results?.[0]?.url || FALLBACK_SRC;
}

export function ReelStrip() {
  const scrollRef = useRef(null);

  return (
    <section className="bg-sand/30 py-16 md:py-24">
      <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
          #VelmoraWomen
        </p>
        <h2 className="font-playfair text-3xl font-medium text-espresso md:text-4xl">
          Styled by You
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {REELS.map((reel) => (
          <figure
            key={reel.id}
            className="group relative w-[170px] flex-shrink-0 snap-center overflow-hidden rounded-lg sm:w-[200px]"
          >
            <div className="aspect-[9/16] bg-espresso/10">
              <img
                alt="Customer styling reel"
                src={getImageUrl(reel.id)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <figcaption
              id={reel.captionId}
              className="absolute bottom-0 left-0 p-4 font-cormorant text-lg italic text-white"
            >
              {reel.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
