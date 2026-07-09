import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', query: 'woman wearing gold earrings close up warm light' },
  { id: 'reel-2', caption: 'Layered necklaces', query: 'woman layered gold necklaces editorial' },
  { id: 'reel-3', caption: 'Huggie love', query: 'gold huggie earrings on ear close up' },
  { id: 'reel-4', caption: 'Gift-worthy', query: 'gold jewelry gift box velvet' },
  { id: 'reel-5', caption: 'Date night', query: 'woman gold drop earrings evening look' },
  { id: 'reel-6', caption: 'Minimal stack', query: 'gold rings stacked on hand minimal' },
];

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-charcoal">
            Worn by You
          </h2>
          <p className="mt-2 text-muted-fg text-sm">@velmora on Instagram</p>
        </div>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] bg-muted overflow-hidden group"
          >
            <img
              alt={reel.caption}
              data-strk-img-id={`ugc-${reel.id}-img-b2`}
              data-strk-img={`[ugc-${reel.id}-caption] [ugc-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <span
              id={`ugc-${reel.id}-caption`}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
            >
              {reel.caption}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
