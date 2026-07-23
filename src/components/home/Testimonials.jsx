import React from "react";
import Stars from "@/components/ui/Stars";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const REVIEWS = [
  {
    quote:
      "The Golden Sphere Huggies haven't left my ears since they arrived. They look far more expensive than they are.",
    name: "Amara L.",
  },
  {
    quote:
      "I bought the Heirloom Set for my sister's birthday and she thought it was solid gold. The packaging alone felt like a gift.",
    name: "Sofia R.",
  },
  {
    quote:
      "Sensitive ears here — zero irritation, and the finish still looks brand new after months of daily wear.",
    name: "Priya K.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24 lg:px-12">
      <SectionHeading
        eyebrow="Kind Words"
        title="Treasured by Thousands"
        sub="A few notes from the women who wear Velmora every day."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {REVIEWS.map((review, i) => (
          <Reveal key={review.name} delay={i * 90}>
            <figure className="flex h-full flex-col border border-line bg-ivory p-7 shadow-card">
              <Stars value={5} size={15} />
              <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-espresso">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4 font-body text-[11px] font-semibold uppercase tracking-widest2 text-gold-deep">
                {review.name}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
