import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 section-padding">
      <div className="mx-auto max-w-[900px]">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wider text-brand-ink">Loved by You</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex justify-center mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-sm text-brand-charcoal leading-relaxed italic">
                "{t.text}"
              </p>
              <p className="text-xs text-brand-warmgray mt-4 tracking-wide uppercase">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
