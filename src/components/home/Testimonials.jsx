import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="bg-base-100 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">Real words from the women who wear Velmora.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="rounded-2xl bg-white p-6 shadow-soft md:p-8">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="mt-4 font-serif text-lg italic leading-relaxed text-base-800">"{t.text}"</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-base-500">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
