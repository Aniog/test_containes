import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="bg-surface-alt py-16 md:py-24">
      <div className="section-container">
        <p className="eyebrow text-center">Kind words</p>
        <h2 className="mt-2 font-display text-center text-3xl font-semibold md:text-4xl">
          What our community says
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="card-surface p-6">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 font-body text-sm text-ink-secondary leading-relaxed">
                “{item.text}”
              </p>
              <p className="mt-4 font-ui text-xs font-semibold uppercase tracking-display text-ink">
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
