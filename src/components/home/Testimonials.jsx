import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-ink-950 mb-3">What Our Customers Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl border border-brand-200 bg-brand-50 p-6 md:p-8">
              <div className="flex gap-1 text-brand-500 mb-4">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-ink-700 leading-relaxed mb-5">“{item.text}”</p>
              <p className="text-xs uppercase tracking-widest text-ink-500">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
