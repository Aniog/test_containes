import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', query: 'gold earring on ear closeup warm light' },
  { id: 'reel-2', caption: 'Layered & loved', query: 'gold necklace layered on neck editorial' },
  { id: 'reel-3', caption: 'Gift-worthy', query: 'jewelry gift box gold ribbon luxury' },
  { id: 'reel-4', caption: 'The perfect huggie', query: 'gold huggie earring on ear model' },
  { id: 'reel-5', caption: 'Sunset glow', query: 'gold jewelry warm sunset light portrait' },
  { id: 'reel-6', caption: 'Stack & style', query: 'multiple gold rings and bracelets hand' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 mb-8">
        <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-charcoal text-center">
          As Worn by You
        </h2>
        <p id="ugc-subtitle" className="mt-3 text-sm text-muted text-center">
          Real moments, real sparkle
        </p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-8 lg:px-12 pb-4 snap-x snap-mandatory scrollbar-hide">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-lg overflow-hidden snap-start group cursor-pointer"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={`ugc-${reel.id}-img-c3d4`}
              data-strk-img={`[ugc-${reel.id}-caption] [ugc-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p
              id={`ugc-${reel.id}-caption`}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream italic"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
