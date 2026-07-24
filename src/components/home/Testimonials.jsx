import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia M.',
    text: 'The Golden Sphere Huggies are my new everyday staple. They feel expensive but are so comfortable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Elena R.',
    text: 'I ordered the Royal Heirloom Set as a gift and the packaging alone made it feel so special.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Claire T.',
    text: 'Finally jewelry I can wear to the office and out to dinner without changing. Obsessed.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <p className="eyebrow">Reviews</p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl text-ink">What our customers say</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl border border-border bg-white p-6 shadow-soft">
              <div className="flex items-center gap-1 text-accent">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-ink-secondary leading-relaxed">“{item.text}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
