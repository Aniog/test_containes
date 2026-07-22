import React from "react";
import StarRating from "@/components/StarRating";

const TESTIMONIALS = [
  {
    quote:
      "The Golden Sphere Huggies haven't left my ears since they arrived. They look far more expensive than they are.",
    name: "Amelia W.",
    detail: "Verified Buyer — Golden Sphere Huggies",
  },
  {
    quote:
      "I bought the Royal Heirloom Set for my sister's birthday. The gift box alone made her cry — the jewelry finished the job.",
    name: "Sofia M.",
    detail: "Verified Buyer — Royal Heirloom Set",
  },
  {
    quote:
      "Sensitive ears here. Three weeks of daily wear, zero irritation. The gold tone is warm and rich, not brassy at all.",
    name: "Grace L.",
    detail: "Verified Buyer — Petite Crystal Huggies",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold">
          Kind Words
        </p>
        <h2 className="mt-3 font-serif text-3xl font-medium text-cream md:text-5xl">
          Treasured by <span className="italic text-gold-soft">Thousands</span>
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
        {TESTIMONIALS.map((t) => (
          <blockquote
            key={t.name}
            className="flex flex-col rounded-sm border border-noir-line bg-noir-soft p-7 transition-colors duration-300 hover:border-gold/40 md:p-8"
          >
            <StarRating rating={5} />
            <p className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-cream/90">
              “{t.quote}”
            </p>
            <footer className="mt-6 border-t border-noir-line pt-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-cream">
                {t.name}
              </p>
              <p className="mt-1 text-[11px] text-sand">{t.detail}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
