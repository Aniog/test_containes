import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-a1b2c3', captionId: 'ugc-caption-1' },
  { id: 'reel-2', caption: 'Layered & loved', imgId: 'ugc-reel-2-d4e5f6', captionId: 'ugc-caption-2' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-g7h8i9', captionId: 'ugc-caption-3' },
  { id: 'reel-4', caption: 'Date night ready', imgId: 'ugc-reel-4-j0k1l2', captionId: 'ugc-caption-4' },
  { id: 'reel-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-m3n4o5', captionId: 'ugc-caption-5' },
  { id: 'reel-6', caption: 'Stack & style', imgId: 'ugc-reel-6-p6q7r8', captionId: 'ugc-caption-6' },
];

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-muted-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">Worn by You</h2>
          <p className="text-muted text-sm">Real moments, real gold.</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 aspect-[9/16] bg-charcoal overflow-hidden flex-shrink-0 group">
              <div
                className="absolute inset-0"
                data-strk-bg-id={reel.imgId}
                data-strk-bg={`[${reel.captionId}] gold jewelry worn on model`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={reel.captionId} className="font-serif text-sm text-cream italic">
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
