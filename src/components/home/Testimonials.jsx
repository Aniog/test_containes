import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="bg-surface-primary section-padding section-padding-y">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-sans text-overline uppercase text-brand-gold mb-3">What They Say</p>
          <h2 className="font-serif text-heading-2 text-text-primary tracking-[0.03em]">Customer Love</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-surface-secondary border border-white/[0.06] rounded-sm p-6 lg:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-body text-text-secondary leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-sm font-medium text-text-primary">{testimonial.name}</p>
                  <p className="font-sans text-xs text-text-muted mt-0.5">on {testimonial.product}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center">
                  <span className="text-brand-gold text-xs font-serif font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
