import React from 'react';
import StarRating from '@/components/product/StarRating';

const TESTIMONIALS = [
  {
    id: 'review-maya',
    quote:
      'I have worn my Golden Sphere huggies every single day for four months — showers, gym, everything. They still look brand new.',
    name: 'Maya R.',
    detail: 'Verified Buyer · Golden Sphere Huggies',
  },
  {
    id: 'review-charlotte',
    quote:
      'Bought the Heirloom Set for my sister’s 30th. The gift box alone made her cry — the jewelry finished the job.',
    name: 'Charlotte D.',
    detail: 'Verified Buyer · Royal Heirloom Set',
  },
  {
    id: 'review-priya',
    quote:
      'Finally, jewelry that looks like fine jewelry at a price I don’t have to justify. The compliments have not stopped.',
    name: 'Priya S.',
    detail: 'Verified Buyer · Amber Lace Earrings',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="reveal text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-bronze">Kind Words</p>
          <h2 className="mt-3 font-serif text-3xl font-light text-ink md:text-5xl">
            From Our Customers
          </h2>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((review) => (
            <blockquote
              key={review.id}
              className="reveal relative border-t border-hairline pt-8 text-center md:text-left"
            >
              <span
                className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 font-serif text-8xl leading-none text-gold/25 md:left-0 md:translate-x-0"
                aria-hidden="true"
              >
                “
              </span>
              <StarRating rating={5} size="md" centered />
              <p className="mt-4 font-serif text-lg font-light italic leading-relaxed text-cocoa md:text-xl">
                {review.quote}
              </p>
              <footer className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">
                  {review.name}
                </p>
                <p className="mt-1 text-[11px] tracking-wide text-taupe">{review.detail}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
