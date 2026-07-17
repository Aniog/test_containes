import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding bg-velmora-ivory">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-12 h-hairline bg-velmora-gold" />
            <span className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold">
              Love Letters
            </span>
            <span className="w-12 h-hairline bg-velmora-gold" />
          </div>
          <h2 className="heading-section text-velmora-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-velmora-white p-8 md:p-10 border border-hairline border-velmora-light/30"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-velmora-gold fill-velmora-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-body text-velmora-gray leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <p className="font-sans text-caption uppercase tracking-[0.15em] text-velmora-charcoal font-medium">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
