import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-mocha/50 mb-4">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            From Our Community
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-gold fill-gold"
                  />
                ))}
              </div>
              <p className="text-sm text-mocha/70 leading-relaxed italic mb-5">
                "{t.text}"
              </p>
              <p className="font-serif text-sm text-espresso tracking-wider">
                {t.name} {t.initial}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
