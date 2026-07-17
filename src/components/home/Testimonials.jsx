import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="py-20 md:py-28 bg-ivory"
    >
      <div className="container-narrow">
        <div className="text-center mb-12 md:mb-16">
          <p className="kicker mb-3">What They're Saying</p>
          <h2
            id="testimonials-title"
            className="font-serif text-3xl md:text-5xl font-light leading-[1.1] text-ink text-balance"
          >
            Worn, loved, returned to.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-ivory-soft p-8 md:p-10 flex flex-col h-full"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-5 font-serif text-lg md:text-xl font-light leading-[1.45] text-ink flex-1 text-pretty">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-hairline">
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-[11px] uppercase tracking-wider-2 text-ink-muted mt-1">
                  On the {t.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
