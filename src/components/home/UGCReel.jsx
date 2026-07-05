import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', query: 'gold earrings worn on ear close up warm lighting' },
  { id: 'reel-2', caption: 'Layer with love', query: 'gold necklace layered on neck model editorial' },
  { id: 'reel-3', caption: 'The perfect gift', query: 'jewelry gift box gold velvet luxury' },
  { id: 'reel-4', caption: 'Sunset glow', query: 'gold huggie earrings golden hour portrait' },
  { id: 'reel-5', caption: 'Stack & style', query: 'multiple gold earrings ear stack editorial' },
  { id: 'reel-6', caption: 'Made to last', query: 'gold jewelry detail macro craftsmanship' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal text-center mb-10">
          Worn by You
        </h2>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto px-5 md:px-10 pb-4 scrollbar-hide snap-x snap-mandatory">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-brand-ivory overflow-hidden snap-start group"
          >
            <div
              className="absolute inset-0"
              data-strk-bg-id={`ugc-${reel.id}-bg`}
              data-strk-bg={`[ugc-${reel.id}-caption]`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="400"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p
              id={`ugc-${reel.id}-caption`}
              className="absolute bottom-4 left-4 right-4 font-serif text-base text-white italic"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
