import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-velmora-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-velmora-base font-light tracking-wide mb-3">
            What They're Saying
          </h2>
          <div className="w-16 h-px bg-velmora-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-cream p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-velmora-gold fill-velmora-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-velmora-charcoal text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="text-velmora-stone text-xs tracking-wide">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
