import React from 'react';
import { testimonials } from '../../data/products';

const Testimonials = () => {
  return (
    <section className="section-container py-16 md:py-24">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Kind words</p>
        <h2 className="mt-2 font-serif text-3xl text-ink md:text-4xl">What Our Customers Say</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.id} className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex gap-1 text-accent" aria-label={`${item.stars} out of 5 stars`}>
              {Array.from({ length: item.stars }).map((_, idx) => (
                <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-secondary">“{item.text}”</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-ink">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
