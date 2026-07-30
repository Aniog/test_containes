import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '../../data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 mb-10 md:mb-14">
        <div className="text-center">
          <p className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold mb-3">
            #VelmoraStyle
          </p>
          <h2 className="font-serif text-heading-1 md:text-heading-1 text-velmora-black">
            Worn & Loved
          </h2>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="ugc-scroll flex gap-4 px-5 md:px-8 overflow-x-auto pb-4 snap-x snap-mandatory">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-start"
          >
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-velmora-cream">
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}] woman wearing gold jewelry instagram style portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={`ugc-caption-${item.id}`}
                  className="font-serif text-body text-white leading-snug"
                >
                  {item.caption}
                </p>
                <p className="text-[11px] text-white/50 mt-1">{item.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
