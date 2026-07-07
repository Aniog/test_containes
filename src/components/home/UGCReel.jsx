import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', query: 'woman wearing gold earrings close up warm light' },
  { id: 'reel-2', caption: 'Layered & loved', query: 'gold necklace layered on woman neck editorial' },
  { id: 'reel-3', caption: 'Gift-worthy', query: 'jewelry gift box gold velvet luxury' },
  { id: 'reel-4', caption: 'Date night ready', query: 'woman gold huggie earrings evening look' },
  { id: 'reel-5', caption: 'Stack & style', query: 'gold ear cuff stack multiple earrings' },
  { id: 'reel-6', caption: 'Minimal luxe', query: 'minimalist gold jewelry on dark skin' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal text-center">
          Worn by You
        </h2>
        <p className="mt-3 text-sm text-taupe text-center">Real moments, real sparkle</p>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto px-6 md:px-12 lg:px-20 pb-4 scrollbar-hide">
        {reels.map(reel => (
          <div key={reel.id} className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] bg-linen overflow-hidden group cursor-pointer">
            <div
              className="absolute inset-0"
              data-strk-bg-id={`ugc-${reel.id}-bg-4e7c`}
              data-strk-bg={`[ugc-${reel.id}-caption]`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="400"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={`ugc-${reel.id}-caption`}
                className="font-serif text-sm text-cream italic"
              >
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
