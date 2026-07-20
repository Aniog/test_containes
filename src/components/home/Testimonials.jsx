import React from 'react';
import { testimonials } from '@/data/products';
import StarRating from '@/components/ui/StarRating';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-base">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-surface border border-hairline p-6 md:p-8 flex flex-col"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="text-primary text-sm leading-relaxed mt-4 mb-6 flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-hairline flex items-center justify-center">
                  <span className="font-serif text-xs font-medium text-primary">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="text-xs font-medium text-secondary">
                  {t.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
