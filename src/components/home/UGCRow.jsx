import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-sand-light/50">
      <div className="container-max mb-10">
        <p className="font-sans text-xs tracking-widest uppercase text-stone mb-3 text-center md:text-left">As Seen On You</p>
        <h2 className="font-serif text-3xl md:text-4xl text-espresso tracking-wide text-center md:text-left">Styled by the Community</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 section-padding snap-x snap-mandatory">
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[160px] md:w-[180px] snap-start group cursor-pointer"
          >
            <div
              className="relative aspect-[9/16] bg-sand overflow-hidden mb-3"
              data-strk-bg-id={`ugc-${reel.id}`}
              data-strk-bg={`[ugc-cap-${reel.id}] gold jewelry worn on model closeup`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="400"
            >
              <div className="absolute inset-0 bg-espresso/10 group-hover:bg-espresso/0 transition-colors duration-300" />
              <p
                id={`ugc-cap-${reel.id}`}
                className="absolute bottom-0 left-0 right-0 p-3 font-serif text-sm text-warmwhite italic leading-tight"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
              >
                {reel.caption}
              </p>
            </div>
            <p className="text-[10px] tracking-widest uppercase text-stone text-center">{reel.tag}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
