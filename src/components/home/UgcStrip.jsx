import { ugcItems } from '@/data/products';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UgcStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1440px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 section-pad">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-velmora-gold mb-3">
            As Seen On You
          </p>
          <h2 className="heading-section text-3xl md:text-4xl">#VelmoraStyle</h2>
          <div className="gold-divider mt-5" />
        </div>

        {/* Horizontal scroll strip */}
        <div className="overflow-x-auto scrollbar-hide px-5 md:px-10 lg:px-16 xl:px-24">
          <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
            {ugcItems.map((item, i) => (
              <div
                key={item.id}
                className="relative w-[200px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
              >
                <img
                  data-strk-img-id={`ugc-strip-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}] gold jewelry on skin`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${item.id}`}
                  className="absolute bottom-4 left-4 right-4 font-serif italic text-sm md:text-base text-white/90 leading-snug"
                >
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
