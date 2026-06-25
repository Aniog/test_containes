import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 text-center md:mb-20">
          <p className="text-[11px] uppercase tracking-[0.4em] text-mocha">
            Words from our community
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
            Loved, & kept close.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-14">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col items-center text-center fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="fill-champagne text-champagne"
                  />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-xl italic leading-relaxed text-ink md:text-2xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.3em] text-mocha">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
