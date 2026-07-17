import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-taupe text-sm tracking-[0.2em] uppercase mb-2 font-body">
            Love Letters
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream rounded-lg p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-500 fill-gold-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal/80 font-body leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center">
                  <span className="font-serif text-espresso">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-medium text-espresso">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-taupe">
                    on {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
