import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-bronze-900 tracking-wide mb-3">
          Loved by You
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="text-center">
            <div className="flex justify-center gap-0.5 mb-3">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-bronze-500 text-bronze-500" />
              ))}
            </div>
            <p className="text-sm text-taupe-600 leading-relaxed italic mb-4">
              "{t.text}"
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-bronze-700 font-medium">
              {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
