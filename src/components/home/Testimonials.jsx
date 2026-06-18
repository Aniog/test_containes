import React from 'react';
import StarRating from '@/components/ui/StarRating';
import { TESTIMONIALS } from '@/data/products';

export default function Testimonials() {
  return (
    <section className="bg-porcelain py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-14 md:mb-20">
          <p className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans">
            Reviews
          </p>
          <h2 className="mt-3 font-serif font-light text-espresso text-4xl md:text-5xl lg:text-6xl">
            Worn, loved, kept.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-10 lg:gap-x-16 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.id}
              className="text-center md:px-2 relative"
            >
              {i > 0 && (
                <span
                  aria-hidden
                  className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-hairline"
                />
              )}
              <div className="flex justify-center mb-5">
                <StarRating value={5} size={14} />
              </div>
              <p className="font-serif text-xl md:text-2xl text-espresso leading-snug max-w-sm mx-auto">
                “{t.text}”
              </p>
              <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-mute font-sans">
                {t.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
