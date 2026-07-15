import React from 'react';
import StarRating from '@/components/StarRating';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-hairline p-6 lg:p-8 flex flex-col"
            >
              <StarRating rating={t.rating} size={14} className="mb-4" />
              <p className="font-sans text-sm text-text-secondary leading-relaxed flex-1">
                “{t.text}”
              </p>
              <p className="font-sans text-xs uppercase tracking-wider text-text-primary mt-5 font-medium">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
