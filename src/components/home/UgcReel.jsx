import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UgcReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-pearl/50">
      <div className="text-center mb-12">
        <p className="text-xs font-medium tracking-widest uppercase text-velmora-stone mb-3">Styled by You</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">As Seen On</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 md:px-12 lg:px-20 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[160px] md:w-[200px] snap-start"
          >
            <div className="aspect-[9/16] bg-velmora-sand relative overflow-hidden">
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[ugc-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${reel.id}`}
                className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm italic leading-snug"
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