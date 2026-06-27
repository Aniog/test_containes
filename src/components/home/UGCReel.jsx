import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-x7y8z9', titleId: 'ugc-reel-1-title' },
  { id: 'reel-2', caption: 'Stacked & styled', imgId: 'ugc-reel-2-a1b2c3', titleId: 'ugc-reel-2-title' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-d4e5f6', titleId: 'ugc-reel-3-title' },
  { id: 'reel-4', caption: 'Date night ready', imgId: 'ugc-reel-4-g7h8i9', titleId: 'ugc-reel-4-title' },
  { id: 'reel-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-j0k1l2', titleId: 'ugc-reel-5-title' },
  { id: 'reel-6', caption: 'Golden hour', imgId: 'ugc-reel-6-m3n4o5', titleId: 'ugc-reel-6-title' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 border-t border-brand-divider">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark">Worn by You</h2>
          <p className="mt-3 text-sm text-brand-muted font-sans">Real moments, real gold</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {reels.map(reel => (
            <div key={reel.id} className="relative w-44 md:w-52 flex-shrink-0">
              <div className="aspect-[9/16] bg-brand-divider overflow-hidden relative">
                <img
                  data-strk-img-id={reel.imgId}
                  data-strk-img={`[${reel.titleId}] woman wearing gold jewelry close up portrait`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={reel.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p
                  id={reel.titleId}
                  className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
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
