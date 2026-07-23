import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/products';

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-accent mb-2">Reviews</p>
          <h2 className="font-serif text-3xl md:text-4xl">What our customers say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-surface p-6 md:p-8 border border-base-border/60">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-ink-soft leading-relaxed mb-6">"{item.text}"</p>
              <p className="text-xs font-semibold tracking-widest uppercase text-ink-muted">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
