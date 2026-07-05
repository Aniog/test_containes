import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title text-[var(--velmora-text)] mb-4">What Our Customers Say</h2>
          <div className="w-16 h-px bg-[var(--velmora-accent)] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-[var(--velmora-cream)] p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[var(--velmora-accent)] text-[var(--velmora-accent)]" />
                ))}
              </div>
              <p className="text-[var(--velmora-text)] font-serif italic text-lg leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <p className="text-sm text-[var(--velmora-text-muted)] tracking-wider uppercase">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
