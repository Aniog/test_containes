import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', query: 'gold earring on ear close up warm light' },
  { id: 'reel-2', caption: 'Layered necklaces', query: 'gold necklace layered on neck editorial' },
  { id: 'reel-3', caption: 'Huggie love', query: 'gold huggie earring on model ear' },
  { id: 'reel-4', caption: 'Gift-worthy', query: 'jewelry gift box gold velvet' },
  { id: 'reel-5', caption: 'Date night', query: 'gold drop earrings elegant woman' },
  { id: 'reel-6', caption: 'Minimal luxe', query: 'minimalist gold jewelry on skin' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-heading">
            As Worn by You
          </h2>
          <p className="mt-3 text-sm text-muted">
            Tag @velmora to be featured
          </p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div
              key={reel.id}
              className="relative w-44 md:w-52 aspect-[9/16] bg-ivory overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <div
                data-strk-bg-id={`ugc-${reel.id}-bg-4e7c`}
                data-strk-bg={`[ugc-caption-${reel.id}]`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
                className="absolute inset-0"
                style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
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
    </section>
  );
}
