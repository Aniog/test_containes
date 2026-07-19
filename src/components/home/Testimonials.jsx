import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products.js';

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl uppercase tracking-widest">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-surface p-8 lg:p-10 border border-hairline">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-base/90">"{t.text}"</p>
              <p className="mt-5 text-xs uppercase tracking-widest text-muted font-medium">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}