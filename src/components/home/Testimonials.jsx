import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products.js';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(item => (
            <div key={item.id} className="bg-brand-surface rounded-lg p-8 shadow-soft">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-brand-ink leading-relaxed mb-6">"{item.text}"</p>
              <p className="text-sm font-medium text-brand-ink">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
