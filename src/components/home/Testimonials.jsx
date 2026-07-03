import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 border-t border-brand-line bg-brand-warm">
      <div className="container-narrow">
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-2">Reviews</p>
          <h2 className="section-title">What our customers say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl bg-brand-surface p-6 shadow-sm">
              <div className="flex gap-1 text-brand-gold">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-brand-ink leading-relaxed">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold tracking-widest uppercase text-brand-muted">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
