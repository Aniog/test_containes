import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alexandra M.',
    text: 'The Golden Sphere Huggies are my new everyday staple. Lightweight, polished, and they look far more expensive than they are.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya S.',
    text: 'I ordered the Royal Heirloom Set as a gift and the packaging alone felt luxurious. The necklace is even more beautiful in person.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Camille R.',
    text: 'Finally jewelry I can wear daily without irritation. The Amber Lace Earrings are delicate but make a real statement.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-brand-warm">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-brand-accent">Reviews</p>
        <h2 className="mt-2 font-serif text-3xl font-medium text-brand-ink sm:text-4xl">What our customers say</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl bg-brand-surface p-6 shadow-sm">
              <div className="flex items-center gap-1 text-brand-accent">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink">{item.text}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
