import React from "react";
import StarRating from "@/components/ui/StarRating";
import { TESTIMONIALS } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28 border-t border-sand">
      <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-wider2 text-gold mb-3">In Their Words</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">From Our Community</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="text-center md:text-left flex flex-col gap-4"
            >
              <StarRating rating={t.rating} size={14} className="justify-center md:justify-start" />
              <blockquote className="font-serif text-2xl md:text-[26px] leading-snug text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="text-[11px] uppercase tracking-editorial text-muted">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
