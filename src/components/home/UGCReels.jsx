import { useRef, useEffect } from 'react';
import { useScrollReveal } from '@/lib/useScrollReveal';
import { ugcItems } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCReels() {
  const { ref, isVisible } = useScrollReveal();
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-brand-light-gray">
      <div ref={containerRef}>
        <div className={`section-padding text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-sans text-[11px] uppercase tracking-mega-wide text-brand-gold mb-3">
            As Seen On You
          </p>
          <h2 className="font-serif text-heading-2 text-brand-charcoal">#VelmoraStyle</h2>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-5 sm:px-8 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item, i) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] relative overflow-hidden snap-start group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`ugc [ugc-caption-${item.id}] gold jewelry worn ear neck warm`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-base text-white italic"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
