import React from 'react';
import { testimonials } from '@/data/products';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-4">
            What Our Community Says
          </h2>
          <p className="text-velmora-taupe max-w-xl mx-auto">
            Real stories from real people who wear Velmora every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-velmora-sand/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-velmora-espresso leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-velmora-cream flex items-center justify-center">
                  <span className="font-serif text-velmora-charcoal">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-velmora-charcoal">
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
