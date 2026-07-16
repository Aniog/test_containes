import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-[var(--velmora-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-secondary)] mb-3">What They Say</p>
          <h2 className="serif-heading text-3xl md:text-4xl text-[var(--velmora-text)]">Customer Love</h2>
          <div className="w-12 h-px bg-[var(--velmora-gold)] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--velmora-gold)] text-[var(--velmora-gold)]" />
                ))}
              </div>
              <blockquote className="serif-heading text-lg md:text-xl text-[var(--velmora-text)] italic leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>
              <p className="text-xs tracking-widest uppercase text-[var(--velmora-text-secondary)]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
