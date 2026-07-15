import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-charcoal/5 section-padding section-margin">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p 
            className="text-xs uppercase tracking-widest text-charcoal/50 mb-2"
            style={{ letterSpacing: '0.3em' }}
          >
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mt-4" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-cream p-6 md:p-8 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className="fill-gold-500 text-gold-500" 
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal/70 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif text-lg text-charcoal">{testimonial.name}</p>
                <p className="text-xs text-charcoal/50 mt-1">
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
