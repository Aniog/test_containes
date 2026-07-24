import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia R.',
    text: 'The Golden Sphere Huggies are my new everyday staple. Lightweight, polished, and they look much more expensive than they are.',
  },
  {
    name: 'Emma L.',
    text: 'I ordered the Royal Heirloom Set as a gift and the packaging felt so luxurious. The necklace is delicate and beautiful.',
  },
  {
    name: 'Olivia M.',
    text: 'Finally jewelry I can wear without taking off at night. The hypoallergenic claim is real, and the gold tone is warm and rich.',
  },
];

const Testimonials = () => {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <p className="eyebrow">Kind words</p>
          <h2 className="section-heading mt-2">What our customers say</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-sm border border-border bg-background p-6">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-ink-secondary leading-relaxed italic">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold tracking-[0.12em] uppercase text-ink">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
