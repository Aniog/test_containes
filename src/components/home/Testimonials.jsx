import React from "react";
import { Quote } from "lucide-react";
import StarRating from "@/components/ui/StarRating";

const REVIEWS = [
  {
    id: 1,
    name: "Amelia R.",
    quote:
      "I wear the Golden Sphere Huggies every single day. Six months in, not a single scratch on the plate. I forget they're not solid gold.",
    rating: 5,
    product: "Golden Sphere Huggies",
  },
  {
    id: 2,
    name: "Priya S.",
    quote:
      "Bought the Royal Heirloom Set for my sister's birthday. The packaging alone made her cry. The necklace, she hasn't taken off.",
    rating: 5,
    product: "Royal Heirloom Set",
  },
  {
    id: 3,
    name: "Margaux D.",
    quote:
      "Quiet, considered, and the weight feels real. Velmora is the rare demi-fine brand I'd actually gift to a friend.",
    rating: 5,
    product: "Majestic Flora Nectar",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ivory">
      <div className="container-page py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow text-taupe mb-3">Worn & Loved</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] text-ink">
            In their own words
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r) => (
            <figure
              key={r.id}
              className="relative bg-ivory-soft p-8 md:p-10 border border-hairline"
            >
              <Quote
                className="absolute top-6 right-6 w-6 h-6 text-gold/60"
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <StarRating value={r.rating} size={14} className="mb-5" />
              <blockquote className="font-serif text-xl md:text-[22px] leading-snug text-ink">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-hairline">
                <p className="text-sm font-medium text-ink">{r.name}</p>
                <p className="text-xs text-taupe mt-0.5">
                  Verified · {r.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
