import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    caption: 'Golden hour glow',
    textId: 'reel-1-caption',
    search: 'gold jewelry on woman ear closeup warm light',
  },
  {
    id: 'reel-2',
    caption: 'Stack & layer',
    textId: 'reel-2-caption',
    search: 'layered gold necklaces on neck collarbone',
  },
  {
    id: 'reel-3',
    caption: 'Everyday elegance',
    textId: 'reel-3-caption',
    search: 'gold huggie earrings on woman earlobes',
  },
  {
    id: 'reel-4',
    caption: 'Gift-worthy',
    textId: 'reel-4-caption',
    search: 'jewelry gift box gold earrings luxury packaging',
  },
  {
    id: 'reel-5',
    caption: 'Effortless shine',
    textId: 'reel-5-caption',
    search: 'gold crystal necklace on woman decolletage warm',
  },
  {
    id: 'reel-6',
    caption: 'Date night ready',
    textId: 'reel-6-caption',
    search: 'gold drop earrings on woman evening look',
  },
];

export default function UgcReels() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-ink-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="section-subtitle text-gold-300 mb-3">Styled by you</p>
          <h2 className="section-title text-ivory-50">#VelmoraStyle</h2>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
      >
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] aspect-[9/16] overflow-hidden group cursor-pointer"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {/* Image */}
            <div
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={reel.search}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              className="absolute inset-0 bg-ink-700 transition-transform duration-700 group-hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
            </div>

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={reel.textId}
                className="font-serif text-base md:text-lg text-ivory-50 italic leading-snug"
              >
                {reel.caption}
              </p>
            </div>

            {/* Hover border */}
            <div className="absolute inset-0 border border-transparent group-hover:border-gold-400/30 transition-colors duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
