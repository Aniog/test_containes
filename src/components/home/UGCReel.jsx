import React, { useRef } from 'react';
import { ugcItems } from '@/data/products';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function UGCReel() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const scrollRef = useRef(null);

  return (
    <section className="py-16 lg:py-24 bg-brand-cream overflow-hidden" ref={ref}>
      <div className={`section-padding mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-3">
          Styled by You
        </p>
        <h2 className="font-serif text-3xl lg:text-4xl text-brand-charcoal">
          #VelmoraMoment
        </h2>
        <div className="hairline-divider max-w-[60px] mt-5" />
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className={`flex-shrink-0 w-[200px] sm:w-[240px] aspect-[9/16] relative overflow-hidden group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ scrollSnapAlign: 'start', transitionDelay: `${i * 80}ms` }}
          >
            <div
              className="absolute inset-0 bg-brand-sand"
              data-strk-img-id={item.id}
              data-strk-img={item.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm text-brand-cream/90 tracking-wide">{item.caption}</p>
            </div>
            {/* Hover zoom effect */}
            <div className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
