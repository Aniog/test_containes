import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-velmora-gold text-xs tracking-super-wide uppercase mb-2">What They Say</p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-velmora-base">Loved by Thousands</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-warm p-6 lg:p-8 border border-velmora-stone-lighter/20"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-velmora-gold fill-velmora-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg text-velmora-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Attribution */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-velmora-base">{testimonial.name}</p>
                  <p className="text-xs text-velmora-stone-light">Verified Purchase</p>
                </div>
                <span className="text-xs text-velmora-stone-light italic">{testimonial.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
