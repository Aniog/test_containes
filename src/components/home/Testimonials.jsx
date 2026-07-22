import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="section-subtitle">Kind words</p>
          <h2 className="section-title mt-2">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map(item => (
            <div key={item.id} className="rounded-sm border border-brand-border bg-brand-cream p-6 sm:p-8">
              <div className="flex gap-1 text-brand-gold">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 font-serif text-lg italic leading-relaxed text-brand-charcoal/90">"{item.text}"</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-brand-muted">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
