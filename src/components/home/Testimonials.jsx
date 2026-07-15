import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 md:p-10 border border-hairline flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-charcoal text-sm leading-relaxed flex-1 italic font-serif">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="mt-6 text-xs font-medium tracking-wide uppercase text-warm-gray">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
