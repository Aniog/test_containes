import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">
            Reviews
          </p>
          <h2 className="velmora-heading text-3xl sm:text-4xl text-[var(--velmora-text)]">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-[var(--velmora-accent)] mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[var(--velmora-surface)] p-6 sm:p-8 border border-[var(--velmora-border)]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[var(--velmora-accent)] text-[var(--velmora-accent)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--velmora-text)] leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--velmora-accent)]/20 flex items-center justify-center">
                  <span className="velmora-heading text-sm text-[var(--velmora-accent)]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-[var(--velmora-text)]">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
