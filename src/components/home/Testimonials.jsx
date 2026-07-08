import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-brand-accent mb-3">Kind Words</p>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-ink">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-8 md:p-10 rounded-sm shadow-soft">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-brand-ink leading-relaxed mb-6">“{item.text}”</p>
              <p className="text-sm tracking-widest uppercase text-brand-muted">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
