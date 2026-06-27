import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="pb-14 text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold-deep">
            Reviews
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-tight text-espresso md:text-5xl">
            Loved by 12,000+ women.
          </h2>
        </div>

        <div className="grid gap-px bg-hairline md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col bg-cream p-8 md:p-10"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                    strokeWidth={1}
                  />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 font-serif text-xl leading-relaxed text-espresso md:text-2xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-hairline pt-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-espresso">
                  {t.name}
                </p>
                <p className="mt-1 text-xs text-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
