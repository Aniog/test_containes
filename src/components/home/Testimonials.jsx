import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-ivory">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-velmora-bronze mb-3">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-deep">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-velmora-cream p-8 md:p-10 border border-velmora-sand/50 flex flex-col"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl text-velmora-deep italic leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="mt-6 pt-5 border-t border-velmora-sand/50">
                <p className="text-sm font-sans text-velmora-warmgray">{t.name}</p>
                <p className="text-xs text-velmora-lightgray mt-0.5">Verified Buyer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
