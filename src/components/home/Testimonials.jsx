import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <p className="text-brand-gold text-xs tracking-[0.2em] uppercase font-sans font-medium mb-3">
            Real Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-dark font-light">
            Loved by Thousands
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-brand-white p-8 rounded-sm border border-brand-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-brand-gold fill-brand-gold"
                  />
                ))}
              </div>
              <p className="font-serif text-sm md:text-base text-brand-charcoal leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="mt-4 font-sans text-xs tracking-widest uppercase text-brand-muted">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}