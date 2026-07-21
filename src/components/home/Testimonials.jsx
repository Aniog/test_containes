import React from "react";
import Stars from "@/components/ui/Stars";
import Reveal from "@/components/ui/Reveal";

const REVIEWS = [
  {
    quote:
      "The Sphere Huggies haven't left my ears since they arrived. They look three times the price and feel like nothing at all.",
    name: "Amelia R.",
    piece: "Golden Sphere Huggies",
  },
  {
    quote:
      "I bought the Heirloom Set for my sister's birthday — the box alone made her gasp. She wears the necklace every single day.",
    name: "Sofia M.",
    piece: "Royal Heirloom Set",
  },
  {
    quote:
      "Sensitive ears, zero irritation, endless compliments. The Amber Lace drops are the most beautiful things I own.",
    name: "Priya K.",
    piece: "Amber Lace Earrings",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-deep">
            Kind Words
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
            Treasured by Thousands
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col border border-line bg-cream p-8">
                <Stars rating={5} size={14} />
                <p className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-ink/90">
                  "{review.quote}"
                </p>
                <footer className="mt-6 border-t border-line pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink">
                    {review.name}
                  </p>
                  <p className="mt-1 text-[11px] text-taupe">
                    Verified buyer · {review.piece}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
