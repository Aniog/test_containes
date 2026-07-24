import React from "react";
import Stars from "@/components/ui/Stars";
import Reveal from "@/components/ui/Reveal";

const REVIEWS = [
  {
    quote:
      "The Golden Sphere Huggies haven't left my ears since they arrived. They look three times the price — my jeweler asked where they were from.",
    name: "Amelia R.",
    piece: "Golden Sphere Huggies",
  },
  {
    quote:
      "Bought the Heirloom Set for my sister's birthday. The linen box alone made her cry a little. The pieces? Absolutely glowing.",
    name: "Priya S.",
    piece: "Royal Heirloom Set",
  },
  {
    quote:
      "I have sensitive ears and these are the first plated earrings I've worn all day without a single itch. Quiet, beautiful, perfect.",
    name: "Naomi T.",
    piece: "Amber Lace Earrings",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-10 text-center md:mb-14">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
            Kind Words
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light text-ink md:text-5xl">
            From Our Community
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3 md:gap-8">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col border border-line bg-cream p-7 shadow-[0_18px_40px_-30px_rgba(33,26,18,0.4)] md:p-9">
                <Stars rating={5} size={14} />
                <p className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-espresso">
                  “{review.quote}”
                </p>
                <footer className="mt-6 border-t border-line pt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest2 text-ink">
                    {review.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-taupe">
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
