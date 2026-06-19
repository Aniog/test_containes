import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/products";

export default function Testimonials() {
  return (
    <section className="bg-ivory border-y border-line">
      <div className="container-page py-20 md:py-28">
        <div className="max-w-xl mb-14">
          <p className="eyebrow">From Our Community</p>
          <h2 className="mt-3 font-serif font-light text-4xl md:text-5xl text-ink leading-[1.05] text-balance">
            Worn, gifted, returned to.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-5 p-8 md:p-10 bg-cream border border-line"
            >
              <Stars rating={t.rating} />
              <blockquote className="font-serif text-xl md:text-2xl text-ink leading-snug text-balance flex-1">
                <span className="text-gold mr-1">“</span>
                {t.text}
                <span className="text-gold ml-1">”</span>
              </blockquote>
              <figcaption className="font-sans text-[11px] uppercase tracking-widest2 text-mushroom">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "fill-gold text-gold" : "text-line"}`}
          strokeWidth={1.2}
        />
      ))}
    </div>
  );
}
