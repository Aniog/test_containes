import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] text-[var(--color-gold-primary)] mb-3">
            LOVE LETTERS
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)]">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 stagger-children">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="text-center px-4"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-[var(--color-gold-primary)] text-[var(--color-gold-primary)]" 
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg md:text-xl text-[var(--color-text-primary)] italic leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div>
                <p className="font-sans text-sm font-medium text-[var(--color-text-primary)]">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">
                  on {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
