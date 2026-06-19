import React from "react";
import { Star } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    quote:
      "I ordered the Golden Sphere huggies and the Royal Heirloom set for my sister's birthday. Both pieces arrived in the most thoughtful packaging I've ever seen.",
    product: "Royal Heirloom Set",
  },
  {
    id: 2,
    name: "Priya K.",
    quote:
      "I've worn the Aura cuff every day for three months — through the gym, the office, a wedding — and it still looks brand new. Quietly obsessed.",
    product: "Vivid Aura Jewels",
  },
  {
    id: 3,
    name: "Elena R.",
    quote:
      "Finally, demi-fine that doesn't feel disposable. You can tell the plating is thick, and the design is genuinely editorial. Already on my second order.",
    product: "Majestic Flora Nectar",
  },
];

export function Testimonials() {
  return (
    <section
      className="bg-espresso text-ivory py-20 md:py-28 lg:py-32 relative"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center mb-14 md:mb-20">
          <SectionTitle
            eyebrow="Loved by 12,000+ women"
            title="Quiet Words"
            italicWord="Words"
            tone="dark"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {REVIEWS.map((r) => (
            <figure
              key={r.id}
              className="border-t border-hairline-dark pt-8 md:pt-10"
            >
              <div className="flex items-center gap-0.5 mb-5 md:mb-6" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-gold text-gold"
                    strokeWidth={1.2}
                  />
                ))}
              </div>
              <blockquote className="font-serif italic text-[1.125rem] md:text-[1.25rem] leading-[1.6] text-ivory/95">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 md:mt-8 flex items-center justify-between">
                <span className="font-serif italic text-[1.0625rem] text-ivory/85">
                  — {r.name}
                </span>
                <span className="eyebrow-sm text-ivory/55">
                  {r.product}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}