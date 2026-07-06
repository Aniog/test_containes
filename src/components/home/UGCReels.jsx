import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', imgId: 'ugc-reel-1-a7b3c2', descId: 'ugc-caption-1', query: 'gold earring on ear close up warm light' },
  { id: 'reel-2', caption: 'Layered & loved', imgId: 'ugc-reel-2-d4e5f6', descId: 'ugc-caption-2', query: 'gold necklace layered on neck model' },
  { id: 'reel-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-g7h8i9', descId: 'ugc-caption-3', query: 'jewelry gift box gold ribbon' },
  { id: 'reel-4', caption: 'The perfect huggie', imgId: 'ugc-reel-4-j1k2l3', descId: 'ugc-caption-4', query: 'gold huggie earring on ear' },
  { id: 'reel-5', caption: 'Sunset glow', imgId: 'ugc-reel-5-m4n5o6', descId: 'ugc-caption-5', query: 'woman wearing gold jewelry sunset' },
  { id: 'reel-6', caption: 'Minimal luxe', imgId: 'ugc-reel-6-p7q8r9', descId: 'ugc-caption-6', query: 'minimalist gold chain necklace' },
];

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            As Seen On You
          </h2>
          <p className="text-sm text-muted mt-3">Real moments, real jewelry</p>
        </div>

        <div ref={containerRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-5 px-5 md:mx-0 md:px-0">
          {reels.map(reel => (
            <div key={reel.id} className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden bg-muted-bg group cursor-pointer">
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.descId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p id={reel.descId} className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
                {reel.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
