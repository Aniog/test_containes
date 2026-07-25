import React from "react";
import Stars from "@/components/product/Stars";
import Reveal from "@/components/Reveal";

const REVIEWS = [
  {
    quote:
      "The Sphere Huggies haven't left my ears since they arrived. They look three times the price — my jeweler asked where they were from.",
    name: "Amelia R.",
    detail: "Golden Sphere Huggies",
  },
  {
    quote:
      "Bought the Heirloom Set for my sister's birthday. The gift box alone made her cry a little. The necklace made her cry more.",
    name: "Priya K.",
    detail: "Royal Heirloom Set",
  },
  {
    quote:
      "Sensitive ears, zero irritation, endless compliments. The Vivid Aura cuff is the piece I reach for when I want to feel put together.",
    name: "Danielle M.",
    detail: "Vivid Aura Jewels",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Kind Words
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
            Treasured by <em className="italic">thousands</em>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <figure className="flex h-full flex-col border border-sand bg-ivory p-7 md:p-9">
                <Stars rating={5} size="h-4 w-4" />
                <blockquote className="mt-5 flex-1 font-serif text-xl italic leading-relaxed text-espresso">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-7 border-t border-sand pt-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-ink">
                    {review.name}
                  </p>
                  <p className="mt-1 text-xs text-taupe">
                    Verified buyer · {review.detail}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
