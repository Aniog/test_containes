import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="mx-auto max-w-page px-4 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-muted mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-base">
            Loved by Our Customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 md:p-10 border border-border relative"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-base font-sans text-base leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="text-sm font-sans font-medium text-muted">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
