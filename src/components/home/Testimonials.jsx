import React from "react";
import StarRating from "@/components/product/StarRating";

const reviews = [
  {
    name: "Maya K.",
    location: "Brooklyn, NY",
    body: "The Golden Sphere Huggies are the only earrings I’ve re-ordered twice. Weighty in the best way, and they catch the light beautifully at dinner.",
    product: "Golden Sphere Huggies",
  },
  {
    name: "Noor E.",
    location: "London, UK",
    body: "I bought the Royal Heirloom Set for my sister’s birthday. The packaging alone made her cry. The necklace, she hasn’t taken off.",
    product: "Royal Heirloom Set",
  },
  {
    name: "Elena R.",
    location: "Lisbon, PT",
    body: "Quietly the best demi-fine I’ve found at this price. The plating has held up after months of daily wear — no green, no tarnish.",
    product: "Amber Lace Earrings",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface border-y border-dune">
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
            Worn & Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso tracking-tight">
            Letters from our wearers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="bg-canvas border border-dune p-8 md:p-10 flex flex-col"
            >
              <StarRating value={5} />
              <blockquote className="mt-5 font-serif text-lg md:text-xl leading-snug text-espresso flex-1">
                “{r.body}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-dune">
                <p className="text-sm text-espresso tracking-wide">{r.name}</p>
                <p className="text-[11px] uppercase tracking-widest2 text-taupe mt-1">
                  {r.location} · {r.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
