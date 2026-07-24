import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-charcoal-800">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-caption uppercase tracking-[0.25em] text-gold-400 mb-3">
            @velmora
          </p>
          <h2 className="heading-section text-cream-50">Styled by You</h2>
          <div className="divider mx-auto mt-5" />
        </div>

        {/* Horizontal scroll reel */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 snap-x snap-mandatory">
          {ugcItems.map((item, i) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] md:w-[240px] snap-start group cursor-pointer"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-charcoal-700">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[ugc-caption-${item.id}] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${item.id}`}
                  className="absolute bottom-4 left-4 right-4 font-serif text-sm text-cream-100 italic tracking-wide"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
