import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-3">Love Letters</p>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="w-16 h-px bg-[var(--color-gold)] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--color-star)] text-[var(--color-star)]" />
                ))}
              </div>
              <p className="font-serif-display text-lg md:text-xl font-light italic leading-relaxed mb-6 text-[var(--color-deep-brown)]">
                "{testimonial.text}"
              </p>
              <div className="w-8 h-px bg-[var(--color-gold)] mx-auto mb-4" />
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-soft-gray)]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
