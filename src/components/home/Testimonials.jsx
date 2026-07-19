import React from 'react';
import { Quote } from 'lucide-react';
import StarRating from '@/components/ui/StarRating';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-gold text-sm font-medium uppercase tracking-[0.25em] mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-brand-charcoal">
            What Our Customers Say
          </h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mt-6" />
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 md:p-10 border border-brand-light-gray hover:shadow-lg transition-shadow duration-500"
            >
              <Quote className="w-8 h-8 text-brand-gold/30 mb-6" />
              <p className="text-brand-text leading-relaxed mb-6 text-sm">
                "{testimonial.text}"
              </p>
              <div className="border-t border-brand-light-gray pt-5">
                <StarRating rating={testimonial.rating} showCount={false} size="sm" />
                <p className="font-serif text-lg font-medium text-brand-charcoal mt-3">
                  {testimonial.name}
                </p>
                <p className="text-xs text-brand-warm-gray mt-1">
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
