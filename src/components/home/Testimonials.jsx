import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-warm-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-[10px] tracking-widest-2xl uppercase text-gold-light mb-3">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-widest uppercase text-white">
            What Our Customers Say
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-warm-700/50 backdrop-blur-sm border border-white/5 rounded-lg p-8 text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <p className="font-serif text-base text-white tracking-wider">
                  {testimonial.name}
                </p>
                <p className="font-sans text-[10px] text-gold-light/60 tracking-wider uppercase mt-1">
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
