import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-ink">Loved by Our Community</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ivory p-8 md:p-10 flex flex-col"
            >
              <Quote className="w-6 h-6 text-gold/40 mb-4" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < t.rating ? 'text-gold fill-gold' : 'text-champagne'}`}
                  />
                ))}
              </div>
              <p className="text-ink text-sm leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>
              <p className="text-muted text-xs tracking-[0.1em] uppercase">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
