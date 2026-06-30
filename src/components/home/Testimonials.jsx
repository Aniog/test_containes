import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-ink text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-base-200 bg-cream p-6 sm:p-8 shadow-soft"
            >
              <div className="flex gap-1 text-gold-500 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="font-serif text-lg text-ink/80 leading-relaxed italic">
                “{testimonial.text}”
              </p>
              <p className="mt-5 text-sm font-semibold text-ink">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
