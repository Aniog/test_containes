import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">Real Reviews</p>
          <h2 className="section-title mt-2">Hear from Our Community</h2>
          <div className="w-12 h-0.5 bg-brand-500/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-pearl-50 p-8 rounded-sm border border-pearl-100 hover:border-pearl-200 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-500 text-brand-500"
                  />
                ))}
              </div>
              <p className="text-midnight-800 text-sm leading-relaxed font-sans">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-pearl-200">
                <p className="text-sm font-serif text-midnight-900">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}