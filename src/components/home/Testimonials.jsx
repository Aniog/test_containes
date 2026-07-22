import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-taupe mb-3">
            Real Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-dark">
            Loved by Our Community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream-dark border border-border p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-dark text-sm leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>
              <p className="text-xs font-medium tracking-wider uppercase text-taupe">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
