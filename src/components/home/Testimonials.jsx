import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="bg-white hairline">
      <div className="section-container py-16 md:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-ultra text-accent">Kind words</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">What our collectors say</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl border border-border bg-background p-6 md:p-8">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: item.stars }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm md:text-base text-ink-secondary leading-relaxed">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-ultra text-ink">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
