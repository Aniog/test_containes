import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="bg-velmora-cream py-20 md:py-28 border-t border-velmora-stone/50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-velmora-gold text-xs font-sans tracking-[0.2em] uppercase mb-4">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-velmora-espresso mb-4">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="text-center">
              <div className="flex items-center justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-velmora-charcoal text-sm italic leading-relaxed mb-4 font-serif">
                "{t.text}"
              </p>
              <p className="text-[11px] font-sans tracking-widest uppercase text-velmora-warm-gray">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
