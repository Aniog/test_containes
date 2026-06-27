import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', query: 'gold earrings on woman ear close up warm light' },
  { id: 'reel-2', caption: 'Layered necklaces', query: 'layered gold necklaces on woman neck editorial' },
  { id: 'reel-3', caption: 'Gift-worthy', query: 'gold jewelry gift box velvet luxury' },
  { id: 'reel-4', caption: 'Huggie love', query: 'gold huggie earrings on model ear' },
  { id: 'reel-5', caption: 'Date night', query: 'woman wearing gold drop earrings evening' },
  { id: 'reel-6', caption: 'Minimal stack', query: 'minimal gold rings stacked on hand' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-ivory" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">Worn by You</h2>
          <p className="mt-3 text-sm text-muted">Real moments, real gold</p>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map((reel) => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] bg-dark overflow-hidden flex-shrink-0 group">
              <div
                className="absolute inset-0"
                data-strk-bg-id={`ugc-${reel.id}-bg-a1b2c3`}
                data-strk-bg={`[ugc-${reel.id}-caption]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={`ugc-${reel.id}-caption`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
              >
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
