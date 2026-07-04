import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 text-gold-deep"
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container-editorial">
        <div className="text-center mb-12 md:mb-16">
          <p className="eyebrow">Worn and Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mt-3 tracking-[-0.01em] max-w-2xl mx-auto text-balance">
            Words from the women who wear Velmora.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="bg-cream p-8 md:p-10 border border-hairline flex flex-col"
            >
              <StarRow count={t.rating} />
              <blockquote className="mt-6 font-serif text-xl md:text-[22px] text-ink leading-[1.45] text-balance flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-hairline">
                <p className="text-[12px] uppercase tracking-[0.24em] text-ink font-medium">
                  {t.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-taupe mt-1">
                  Verified Buyer
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
