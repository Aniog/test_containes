import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <div className="text-center">
          <p className="eyebrow">Kind words</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-text">What our customers say</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-sm border border-border bg-surface p-6">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-text-secondary leading-relaxed">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-text">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
