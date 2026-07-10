import React from 'react';
import StarRating from '../ui/StarRating';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-xs uppercase tracking-[0.2em] text-gold mb-3">
            What Our Customers Say
          </span>
          <h2 className="section-title">Loved by Thousands</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} size="md" />
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg text-espresso leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center">
                  <span className="font-serif text-lg text-gold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-sans text-sm text-stone">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
