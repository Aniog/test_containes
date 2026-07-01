import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-500)] mb-3">Kind Words</p>
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-4">What Our Customers Say</h2>
          <div className="w-12 h-px bg-[var(--color-gold-400)] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.id} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--color-gold-400)] text-[var(--color-gold-400)]" />
                ))}
              </div>
              <blockquote className="heading-serif text-xl md:text-2xl italic mb-6 leading-relaxed text-[var(--color-velmora-800)]">
                "{t.text}"
              </blockquote>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-velmora-500)]">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
