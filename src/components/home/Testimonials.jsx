import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-gold mb-3">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl">Loved by Many</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-velmora-surface p-8 shadow-sm border border-velmora-border/50">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                ))}
              </div>
              <p className="font-serif text-xl leading-relaxed mb-6 text-velmora-charcoal">
                "{t.text}"
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-velmora-muted">
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
