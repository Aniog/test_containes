import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/products';

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ivory">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center mb-14 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-ink-soft mb-3">
            Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            From the Velmora Circle
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {TESTIMONIALS.map((t) => (
            <figure key={t.id} className="flex flex-col items-start">
              <Stars />
              <blockquote className="mt-5 font-serif text-xl md:text-[22px] text-ink leading-snug">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-[0.3em] text-ink-soft">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
