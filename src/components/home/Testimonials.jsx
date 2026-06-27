import * as React from "react";
import { TESTIMONIALS } from "@/data/products";
import { StarRating } from "@/components/ui/star-rating";
import { useReveal } from "@/hooks/useReveal";

export function Testimonials() {
  const headingRef = useReveal();
  return (
    <section className="bg-cream py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div ref={headingRef} className="reveal text-center">
          <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-deep">
            From our customers
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-ink">
            Words from wearers
          </h2>
          <div className="mt-6 mx-auto w-12 h-px bg-gold" />
        </div>

        <ul className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="bg-ivory p-8 md:p-10 border border-hairline"
            >
              <StarRating value={t.rating} />
              <p className="mt-6 font-serif text-xl md:text-2xl text-ink leading-snug">
                "{t.quote}"
              </p>
              <p className="mt-7 text-[11px] uppercase tracking-eyebrow font-medium text-ink-muted">
                {t.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
