import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="section-padding bg-[var(--color-warm-white)]">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-gold)] mb-3">What They Say</p>
          <h2 className="serif-heading text-4xl md:text-5xl mb-4">Loved by Thousands</h2>
          <div className="w-16 h-px bg-[var(--color-gold)] mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center p-8 bg-[var(--color-cream)] rounded-sm">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>
              <p className="serif-heading text-xl italic mb-6 leading-relaxed text-[var(--color-charcoal)]">
                "{testimonial.text}"
              </p>
              <p className="text-sm tracking-wider uppercase text-[var(--color-warm-gray)]">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
