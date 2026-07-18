import React from 'react';
import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream border-t border-velmora-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-sans font-medium tracking-[0.3em] uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-velmora-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-velmora-warm p-8 md:p-10">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>

              <p className="font-serif text-lg text-velmora-charcoal leading-relaxed italic">
                "{t.text}"
              </p>

              <div className="mt-6 pt-6 border-t border-velmora-sand">
                <p className="text-sm font-medium text-velmora-charcoal">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
