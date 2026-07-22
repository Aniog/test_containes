import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-velmora-warm">
      <div className="container-max">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-12 tracking-wide">
          Loved by Our Community
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 md:p-10 text-center space-y-4"
            >
              {/* Stars */}
              <div className="flex justify-center space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-velmora-text-muted italic font-light leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-velmora-beige flex items-center justify-center">
                  <span className="text-sm font-medium text-velmora-charcoal">
                    {testimonial.initial}
                  </span>
                </div>
                <span className="text-sm font-medium text-velmora-charcoal">
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
