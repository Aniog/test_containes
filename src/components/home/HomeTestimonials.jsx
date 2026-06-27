import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/product/ProductCard";

const REVIEWS = [
  {
    id: 1,
    name: "Amelia R.",
    rating: 5,
    quote:
      "I've worn the huggies every day for six months — they still look new. The weight, the finish — it feels like so much more than the price.",
  },
  {
    id: 2,
    name: "Sophie L.",
    rating: 5,
    quote:
      "Bought the Flora necklace for my sister's birthday. She hasn't taken it off. The packaging alone made it feel like a real moment.",
  },
  {
    id: 3,
    name: "Priya K.",
    rating: 5,
    quote:
      "Finally, demi-fine that doesn't look like fast fashion. The gold has a real warmth to it — and the ear cuff is genuinely stunning.",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bone)]">
      <Container>
        <SectionHeading
          eyebrow="From Our Community"
          title="Loved, worn, kept"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r) => (
            <figure
              key={r.id}
              className="flex flex-col gap-5 p-8 md:p-10 bg-[var(--color-cream)] border border-[var(--color-line)]/50 hover:border-[var(--color-line)] transition-colors"
            >
              <Stars value={r.rating} size={14} />
              <blockquote className="font-serif text-[1.4rem] sm:text-[1.55rem] leading-[1.4] text-[var(--color-ink)] font-light">
                <span className="text-[var(--color-gold-deep)]">“</span>
                {r.quote}
                <span className="text-[var(--color-gold-deep)]">”</span>
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-[var(--color-line)]/60 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold-deep)] flex items-center justify-center font-serif text-base">
                  {r.name.charAt(0)}
                </span>
                <span className="text-sm text-[var(--color-ink-soft)]">{r.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}