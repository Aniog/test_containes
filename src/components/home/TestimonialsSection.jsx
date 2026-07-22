import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold mb-4">
            Reviews
          </p>
          <h2 className="section-heading">What Our Customers Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-100 p-8 md:p-10 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold fill-gold"
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg text-charcoal leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div>
                <p className="font-medium text-charcoal">{testimonial.name}</p>
                <p className="text-sm text-charcoal-light mt-1">
                  Verified Purchase • {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
