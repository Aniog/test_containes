import React from "react";
import Stars from "@/components/ui/Stars";
import SectionHeading from "@/components/ui/SectionHeading";

const REVIEWS = [
  {
    quote:
      "The Golden Sphere Huggies are the only earrings I reach for now. They feel far more expensive than they are.",
    name: "Sophie M.",
  },
  {
    quote:
      "Bought the Royal Heirloom Set for my sister's birthday. The packaging alone felt like a gift — she hasn't taken it off.",
    name: "Amara K.",
  },
  {
    quote:
      "Sensitive ears, zero irritation. The quality is beautiful and the gold tone is warm, not brassy. I'm a customer for life.",
    name: "Elena R.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Kind Words"
          title="Treasured by Many"
          className="reveal"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure
              key={r.name}
              className="reveal flex flex-col gap-4 rounded-sm border border-line bg-cream p-8 shadow-soft"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Stars value={5} size={15} />
              <blockquote className="font-display text-xl italic leading-relaxed text-ink">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-auto font-sans text-xs font-semibold uppercase tracking-luxe text-inkSoft">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
