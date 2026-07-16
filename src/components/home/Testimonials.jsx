import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-sand py-20 md:py-28">
      <div className="container-page">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-charcoal font-light tracking-wide">
            Loved by You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-gold text-gold"
                  />
                ))}
              </div>
              <p className="text-sm md:text-base font-sans text-charcoal/80 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-4 text-xs font-sans text-stone uppercase tracking-wider">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
