import React from 'react';
import { testimonials } from '@/data/products';
import StarRating from '@/components/StarRating';

export default function Testimonials() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-serif text-3xl font-medium text-espresso md:mb-14">
          Loved by Our Community
        </h2>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="border border-border bg-cream p-6 transition-shadow duration-300 hover:shadow-card md:p-8"
            >
              <StarRating rating={testimonial.rating} size={14} />
              <p className="mt-4 font-sans text-sm italic leading-relaxed text-espresso">
                “{testimonial.text}”
              </p>
              <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-widest text-taupe">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
