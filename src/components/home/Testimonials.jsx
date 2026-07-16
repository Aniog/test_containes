import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs tracking-widest-2xl uppercase text-gold mb-3">Reviews</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary font-light">
            Loved by Thousands
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-base border border-border rounded p-6 sm:p-8 hover:border-gold/30 transition-colors duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-text-primary/80 leading-relaxed mb-6 italic font-light">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Customer info */}
              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-sm font-medium text-text-primary">{testimonial.name}</p>
                  <p className="text-xs text-text-muted mt-0.5">Verified Buyer</p>
                </div>
                <p className="text-[10px] tracking-wider uppercase text-text-muted/60">
                  {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
