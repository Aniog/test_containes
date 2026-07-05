import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 border-t border-cream-400/10">
      <div className="mb-12 text-center px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">Styled by You</p>
        <h2 className="serif-heading text-3xl md:text-4xl text-cream-100">As Seen On</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 lg:px-10 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[65vw] md:w-[28vw] lg:w-[18vw] snap-center"
          >
            <div className="relative aspect-[9/16] bg-espresso-700 overflow-hidden group cursor-pointer">
              <div
                className="absolute inset-0"
                data-strk-img-id={`ugc-${i}-bg`}
                data-strk-img={`[ugc-${i}-caption] [ugc-${i}-product] jewelry worn model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
              >
                <div className="w-full h-full flex items-center justify-center bg-espresso-700" />
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p
                  id={`ugc-${i}-caption`}
                  className="serif-display text-lg text-cream-100 italic leading-snug"
                >
                  "{item.caption}"
                </p>
                <p
                  id={`ugc-${i}-product`}
                  className="text-[10px] tracking-[0.12em] uppercase text-gold mt-2"
                >
                  {item.product}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
