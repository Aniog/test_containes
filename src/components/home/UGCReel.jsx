import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function UGCReel() {
  const containerRef = useRef(null);
  const [revealRef, revealed] = useScrollReveal();

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={revealRef} className={`py-16 md:py-24 bg-brand-warm reveal-hidden ${revealed ? 'reveal-visible' : ''}`}>
      <div className="max-w-7xl mx-auto section-padding">
        <h2
          id="ugc-section-title"
          className="font-serif text-heading md:text-display-sm text-brand-charcoal tracking-wide text-center mb-10"
        >
          As Seen On You
        </h2>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div ref={containerRef} className="flex gap-4 px-5 md:px-8 lg:px-12 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 aspect-[9x16] rounded-lg overflow-hidden flex-shrink-0 group"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [ugc-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p id={item.titleId} className="font-serif text-sm text-white tracking-wide">
                  {item.caption}
                </p>
                <p id={item.descId} className="text-[10px] text-white/70 mt-0.5 font-sans">
                  @velmora
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
