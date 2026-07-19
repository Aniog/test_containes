import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-center mb-10 md:mb-14">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream p-6 md:p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-star-gold text-star-gold"
                  />
                ))}
              </div>
              <p className="text-sm md:text-base leading-relaxed flex-1">
                "{t.text}"
              </p>
              <p className="mt-5 text-xs uppercase tracking-widest font-medium text-warm-gray">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
