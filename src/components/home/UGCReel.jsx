import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', query: 'woman wearing gold earrings close up warm light' },
  { id: 'reel-2', caption: 'Layered & loved', query: 'woman layered gold necklaces neck close up' },
  { id: 'reel-3', caption: 'Gift-worthy', query: 'gold jewelry gift box velvet elegant' },
  { id: 'reel-4', caption: 'Minimal luxe', query: 'woman gold huggie earrings minimal style' },
  { id: 'reel-5', caption: 'Date night', query: 'woman gold drop earrings evening look' },
  { id: 'reel-6', caption: 'Stack & style', query: 'woman stacking gold rings bracelets warm' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center">As Worn By You</h2>
        <p className="text-muted-fg text-sm text-center mt-2">Real moments, real gold.</p>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-muted overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-${reel.id}-x7y8z9`}
              data-strk-img={`[ugc-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg text-cream italic"
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
