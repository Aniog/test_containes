import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-cream)]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-4">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-[var(--color-warm-white)] p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" 
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-[var(--color-text-secondary)] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--color-gold-light)] rounded-full flex items-center justify-center">
                  <span className="font-sans text-sm font-medium text-[var(--color-charcoal)]">
                    {testimonial.initials}
                  </span>
                </div>
                <span className="font-sans text-sm font-medium text-[var(--color-charcoal)]">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;