import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-brand-muted">Kind words</p>
          <h2 className="section-title mt-2">What our customers say</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl border border-brand-divider bg-brand-bg p-6">
              <div className="flex items-center gap-1 text-brand-accent">
                {Array.from({ length: item.stars }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
