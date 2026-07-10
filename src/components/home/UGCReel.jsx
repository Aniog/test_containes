import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', desc: 'woman wearing gold earrings close up' },
  { id: 'reel-2', caption: 'Layer with love', desc: 'gold layered necklaces on woman neck' },
  { id: 'reel-3', caption: 'Gift-worthy', desc: 'jewelry gift box gold velvet luxury' },
  { id: 'reel-4', caption: 'Made to last', desc: 'gold huggie hoop earrings on ear' },
  { id: 'reel-5', caption: 'Your new staple', desc: 'woman wearing minimal gold jewelry portrait' },
  { id: 'reel-6', caption: 'Shine on', desc: 'gold chain necklace on woman editorial' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 id="ugc-title" className="font-serif text-3xl md:text-4xl text-charcoal text-center">
          Worn by You
        </h2>
        <p id="ugc-subtitle" className="mt-3 text-sm text-taupe font-sans text-center">
          Real moments, real jewelry
        </p>
      </div>

      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-lg overflow-hidden bg-sand group cursor-pointer"
          >
            <span id={`ugc-${reel.id}-desc`} className="sr-only">{reel.desc}</span>
            <img
              data-strk-img-id={`ugc-${reel.id}-img-c3d4`}
              data-strk-img={`[ugc-${reel.id}-desc]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Caption overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4 pt-12">
              <p id={`ugc-${reel.id}-caption`} className="font-serif text-sm text-white italic">
                {reel.caption}
              </p>
            </div>
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
