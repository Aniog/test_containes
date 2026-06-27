import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-cream tracking-wide">
            What Our Clients Say
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center px-4">
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-sm md:text-base text-warm-tan leading-relaxed italic mb-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs font-sans font-medium uppercase tracking-[0.12em] text-warm-sand">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
