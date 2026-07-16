import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
            Testimonials
          </p>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="divider mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gold-300 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-sm text-charcoal-600 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif text-base text-charcoal-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-charcoal-500 mt-1">
                    Verified Buyer
                  </p>
                </div>
                <p className="text-xs text-gold-500 italic">
                  {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
