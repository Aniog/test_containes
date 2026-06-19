import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[var(--cream-dark)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-medium mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[var(--cream)] p-8 md:p-10 text-center">
              <div className="flex items-center justify-center gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? 'fill-[var(--gold)] text-[var(--gold)]' : 'text-[var(--divider)]'}`}
                  />
                ))}
              </div>
              <p className="text-[var(--charcoal)] text-sm md:text-base leading-relaxed font-light mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-serif-upper text-xs tracking-widest text-[var(--stone)]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
