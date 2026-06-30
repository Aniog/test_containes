import { useRef } from 'react';
import { ugcSlides } from '@/data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  return (
    <section className="py-16 md:py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8 md:mb-10">
        <div className="text-center">
          <p className="text-gold-500 text-xs uppercase tracking-mega-wide font-medium mb-3">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-950">
            Styled by You
          </h2>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-6 snap-x snap-mandatory"
      >
        {ugcSlides.map((slide, i) => (
          <div
            key={slide.id}
            className="flex-shrink-0 snap-start relative w-[180px] md:w-[220px] aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-slide-${slide.id}`}
              data-strk-img={slide.alt}
              data-strk-img-ratio="9x16"
              data-strk-img-width="440"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={slide.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-3 right-3 font-serif text-sm text-cream-50 italic leading-snug">
              {slide.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
