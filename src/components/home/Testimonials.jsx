import React from 'react';
import Stars from '@/components/product/Stars';
import Reveal from '@/components/Reveal';

const REVIEWS = [
  {
    quote:
      'The Golden Sphere Huggies have not left my ears in three months. They still look brand new — I get asked about them constantly.',
    name: 'Amelia R.',
  },
  {
    quote:
      'Bought the Heirloom Set for my sister’s birthday. The gift box alone made her cry — the jewelry is even more beautiful in person.',
    name: 'Sofia M.',
  },
  {
    quote:
      'Finally, gold jewelry that doesn’t irritate my skin. The quality feels far beyond the price. Velmora is my new go-to for gifts.',
    name: 'Priya K.',
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28">
      <Reveal>
        <div className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
            Kind Words
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-espresso md:text-5xl">
            Loved &amp; <span className="italic">Lived In</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
        {REVIEWS.map((review, i) => (
          <Reveal key={review.name} delay={i * 100}>
            <blockquote className="flex h-full flex-col border border-espresso/10 bg-ivory p-8">
              <Stars rating={5} />
              <p className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-cocoa">
                “{review.quote}”
              </p>
              <footer className="mt-6 border-t border-espresso/10 pt-4 text-[11px] font-medium uppercase tracking-[0.25em] text-espresso">
                {review.name}
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
