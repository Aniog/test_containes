import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-velmora">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-velmora-black">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-6 md:p-8"
            >
              <Quote size={28} className="text-velmora-gold/30 mx-auto mb-4" />
              
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-velmora-gold text-velmora-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="font-sans text-sm text-velmora-charcoal/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif text-base text-velmora-black mb-1">
                  {testimonial.name}
                </p>
                <p className="font-sans text-xs text-velmora-stone">
                  Purchased: {testimonial.product}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
