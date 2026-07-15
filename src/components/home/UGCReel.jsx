import { useEffect, useRef } from 'react';
import { ugcItems } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <p className="font-sans text-xs tracking-widest uppercase text-taupe text-center mb-3">
          As Seen On You
        </p>
        <h2 className="serif-heading text-3xl md:text-4xl text-center text-espresso">
          Styled by Our Community
        </h2>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-8 pb-4 -mx-4 md:-mx-8 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[160px] md:w-[200px] snap-start group cursor-pointer"
          >
            <div className="relative aspect-[9/16] bg-stone rounded-sm overflow-hidden mb-3">
              <img
                alt={item.caption}
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}] gold jewelry on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay for caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-3 left-3 right-3 font-serif text-sm text-white italic"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
