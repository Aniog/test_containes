import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">
            Kind Words
          </p>
          <h2 className="serif-heading text-3xl md:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[var(--velmora-gold)] text-[var(--velmora-gold)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="serif-heading text-lg md:text-xl italic leading-relaxed mb-6 text-[var(--velmora-text)]">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <p className="text-xs tracking-widest uppercase text-[var(--velmora-text-muted)]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
