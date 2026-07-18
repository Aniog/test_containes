import React from 'react';
import { StarRating } from '@/components/shared/StarRating';

const REVIEWS = [
  {
    id: 1,
    name: 'Emily R.',
    text: 'The quality is stunning for the price. I wear my huggies every single day and they still look brand new.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sofia M.',
    text: 'Beautiful packaging and even more beautiful jewelry. It felt like opening a luxury gift to myself.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Grace T.',
    text: 'I get compliments every time I wear the Amber Lace earrings. Elegant, lightweight, and timeless.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12">
        <div className="mb-10 text-center md:mb-14">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Love Notes
          </p>
          <h2 className="mt-2 font-serif text-3xl text-ink md:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="border border-hairline bg-paper p-6 transition hover:shadow-sm md:p-8"
            >
              <StarRating rating={review.rating} size={14} />
              <p className="mt-4 font-serif text-lg italic leading-relaxed text-ink">
                “{review.text}”
              </p>
              <p className="mt-6 font-sans text-xs font-medium uppercase tracking-widest text-ink-muted">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
