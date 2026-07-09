import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from './data-products.js';

export default function Testimonials() {
  return (
    <section className="bg-velmora-sand py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.2em] text-velmora-gold uppercase mb-3">Loved by You</p>
          <h2 className="font-serif text-3xl lg:text-4xl tracking-wide">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center px-4">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="text-velmora-slate text-sm leading-relaxed italic mb-4">&ldquo;{t.text}&rdquo;</p>
              <p className="font-serif text-sm tracking-wider text-velmora-charcoal">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
