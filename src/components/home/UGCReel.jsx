import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 'ugc-1', caption: 'Everyday gold', titleId: 'ugc-caption-1' },
    { id: 'ugc-2', caption: 'Stacked & styled', titleId: 'ugc-caption-2' },
    { id: 'ugc-3', caption: 'Date night ready', titleId: 'ugc-caption-3' },
    { id: 'ugc-4', caption: 'Minimal luxe', titleId: 'ugc-caption-4' },
    { id: 'ugc-5', caption: 'Gift-worthy', titleId: 'ugc-caption-5' },
    { id: 'ugc-6', caption: 'The details', titleId: 'ugc-caption-6' },
  ];

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-[28px] md:text-[32px] tracking-[0.08em] uppercase text-text-primary">
            Worn by You
          </h2>
          <p className="text-[13px] text-text-muted mt-3">Real moments, real jewelry.</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 pb-4" style={{ width: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-[180px] md:w-[200px] aspect-[9/16] bg-cream overflow-hidden flex-shrink-0 group">
              <img
                data-strk-img-id={`ugc-reel-${reel.id}-f4e5d6`}
                data-strk-img={`[${reel.titleId}] gold jewelry worn on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover"
                width="200"
                height="356"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <p id={reel.titleId} className="font-serif text-white text-sm italic">
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
