import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

function Stars() {
  return (
    <div className="flex items-center gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-parchment/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-3">
            Reviews
          </p>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.05]">
            Loved by <em className="italic">12,400+</em> customers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-bone p-8 md:p-10 border border-hairline"
            >
              <Stars />
              <blockquote className="mt-6 font-serif text-xl md:text-2xl text-ink leading-snug">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-8 text-[11px] tracking-[0.3em] uppercase text-mute">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
