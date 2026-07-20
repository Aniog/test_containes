import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', query: 'gold earring on woman ear close up warm light' },
  { id: 'reel-2', caption: 'Layered & loved', query: 'gold necklace layered on woman neck editorial' },
  { id: 'reel-3', caption: 'Gift-worthy', query: 'jewelry gift box gold velvet luxury' },
  { id: 'reel-4', caption: 'The perfect huggie', query: 'gold huggie earring on woman ear minimal' },
  { id: 'reel-5', caption: 'Date night ready', query: 'woman wearing gold drop earrings evening' },
  { id: 'reel-6', caption: 'Stack & style', query: 'gold rings and bracelets stacked on hand' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Worn by You</h2>
          <p className="mt-3 text-muted text-sm">@velmora on Instagram</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 md:px-12 lg:px-20 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="relative w-44 md:w-52 aspect-[9/16] bg-surface rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                data-strk-img-id={`ugc-${reel.id}-f8e2d1`}
                data-strk-img={`[ugc-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p
                  id={`ugc-caption-${reel.id}`}
                  className="font-serif text-sm text-white italic"
                >
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
