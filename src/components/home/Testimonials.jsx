import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-hairline">
      <div className="max-w-content mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-muted mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map(t => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl italic text-charcoal leading-relaxed mb-5">
                "{t.text}"
              </p>
              <p className="text-sm font-medium uppercase tracking-wider">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
