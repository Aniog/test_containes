import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="bg-brand-bg py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-widest text-brand-accent mb-2">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-ink">What Our Customers Say</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-sm border border-brand-divider bg-brand-surface p-6 shadow-card">
              <div className="flex gap-1 text-brand-gold">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-brand-ink leading-relaxed">“{item.text}”</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-brand-muted">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
