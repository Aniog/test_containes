import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-gold-400 mb-3">What They Say</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-50 tracking-wide">
            Loved by Thousands
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center p-6 md:p-8 border border-charcoal-800 hover:border-gold-600/30 transition-colors duration-300"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="font-serif text-lg text-velmora-100 italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <p className="text-xs tracking-widest uppercase text-velmora-300">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
