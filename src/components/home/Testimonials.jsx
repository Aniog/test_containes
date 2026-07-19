import React from 'react';
import StarRating from '@/components/ui/StarRating.jsx';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    text: 'I wear my Golden Sphere Huggies almost every day. They still look brand new after six months — and I get compliments constantly.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya K.',
    text: 'The packaging alone made me gasp. It felt like opening a gift to myself. The Amber Lace Earrings are even prettier in person.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma L.',
    text: 'Bought the Royal Heirloom Set for my sister and she cried. Velmora has become my go-to for meaningful gifts.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">Reviews</p>
          <h2 className="font-serif text-3xl font-light md:text-4xl lg:text-5xl">Loved by You</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="border border-hairline bg-surface p-8 transition-colors duration-300 hover:border-foreground/20"
            >
              <StarRating rating={t.rating} size={14} />
              <p className="mt-5 font-serif text-lg italic leading-relaxed text-foreground/95">
                "{t.text}"
              </p>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
