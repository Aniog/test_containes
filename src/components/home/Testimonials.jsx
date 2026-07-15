import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-200/50">
      <div className="max-w-[1440px] mx-auto section-padding">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-caption uppercase tracking-[0.25em] text-gold-500 mb-2 font-sans">
            From Our Community
          </p>
          <h2 className="text-heading-1 text-charcoal-800">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-cream-50 p-8 md:p-10 rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-gold-300 mb-4 rotate-180" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-body-lg text-charcoal-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-charcoal-200 pt-4">
                <p className="text-body font-medium text-charcoal-800">{testimonial.name}</p>
                <p className="text-body-sm text-charcoal-400 mt-0.5">Purchased: {testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
