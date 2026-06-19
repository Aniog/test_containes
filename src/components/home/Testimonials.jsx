import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-16 lg:py-24 bg-brand-sand/40" ref={ref}>
      <div className="section-padding">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-brand-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-brand-charcoal">What Our Customers Say</h2>
          <div className="hairline-divider max-w-[60px] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`bg-brand-cream p-8 lg:p-10 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Quote size={28} className="text-brand-gold/40 mx-auto mb-4" strokeWidth={1} />
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#C9A96E" strokeWidth={0} className="text-brand-gold" />
                ))}
              </div>
              <p className="text-sm text-brand-mid-brown leading-relaxed italic mb-6">
                "{t.text}"
              </p>
              <p className="font-sans text-sm font-semibold text-brand-charcoal tracking-wide">{t.name}</p>
              <p className="text-xs text-brand-soft-brown mt-1">{t.product}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
