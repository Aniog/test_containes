import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-gold/70 mb-3">
            Love Letters
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-ivory tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold/40 mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-charcoal/20 border border-charcoal/30 p-8 lg:p-10 relative group hover:border-gold/20 transition-colors duration-500"
            >
              <Quote size={24} className="text-gold/20 mb-4" strokeWidth={1} />

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={13} className="fill-gold text-gold" strokeWidth={0} />
                ))}
              </div>

              <p className="font-sans text-sm text-muted/80 leading-relaxed mb-6">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <span className="text-xs text-gold font-medium">{t.name.charAt(0)}</span>
                </div>
                <span className="font-sans text-sm text-ivory/70 tracking-wider">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
