import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', desc: 'woman wearing gold earring close up' },
  { id: 'reel-2', caption: 'Layered & loved', desc: 'gold layered necklaces on neck' },
  { id: 'reel-3', caption: 'Gift-worthy', desc: 'gold jewelry in velvet gift box' },
  { id: 'reel-4', caption: 'The perfect huggie', desc: 'gold huggie earring on ear' },
  { id: 'reel-5', caption: 'Sunset glow', desc: 'woman gold jewelry warm golden hour portrait' },
  { id: 'reel-6', caption: 'Stack & style', desc: 'gold rings bracelets stacked on hand' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center">
          Worn by You
        </h2>
        <p className="text-muted-fg text-sm mt-2 font-sans text-center">
          Real moments, real style — tag @velmora to be featured
        </p>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-sm overflow-hidden bg-muted group"
          >
            <span id={`ugc-${reel.id}-desc`} className="sr-only">{reel.desc}</span>
            <div
              className="absolute inset-0"
              data-strk-bg-id={`ugc-${reel.id}-bg-4e7c`}
              data-strk-bg={`[ugc-${reel.id}-desc] [ugc-${reel.id}-caption]`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="400"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p
              id={`ugc-${reel.id}-caption`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg text-white italic"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
