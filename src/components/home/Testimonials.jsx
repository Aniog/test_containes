import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="container-narrow">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent mb-2">Kind Words</p>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl border border-brand-line bg-brand-surface p-6">
              <div className="flex gap-1 text-brand-accent mb-4">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-brand-ink leading-relaxed mb-6">“{item.text}”</p>
              <p className="text-sm font-semibold text-brand-ink">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
