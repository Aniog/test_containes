import React from "react";
import RatingStars from "@/components/product/RatingStars";

const REVIEWS = [
  {
    id: "t-amelia",
    name: "Amelia K.",
    quote:
      "The huggies feel weighty in the best way. I bought them on a whim and now I barely take them off.",
    product: "Golden Sphere Huggies",
    rating: 5,
  },
  {
    id: "t-priya",
    name: "Priya S.",
    quote:
      "Beautifully packaged, the gold catches the light exactly as it does on the website. A gift to myself I don't regret.",
    product: "Majestic Flora Nectar",
    rating: 5,
  },
  {
    id: "t-jess",
    name: "Jess M.",
    quote:
      "I bought the heirloom set for my sister — she cried. Now I'm ordering the cuff for myself.",
    product: "Royal Heirloom Set",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-ivory">
      <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-14">
          <p className="eyebrow mb-3">From the Community</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso">
            Worn and loved
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((r) => (
            <figure
              key={r.id}
              className="bg-sand-100 p-7 sm:p-8 flex flex-col h-full"
              style={{ backgroundColor: "#F2EBE0" }}
            >
              <RatingStars value={r.rating} size={16} className="mb-5" />
              <blockquote className="font-serif text-xl sm:text-[22px] leading-snug text-espresso flex-1">
                <p>"{r.quote}"</p>
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-espresso/10 flex items-center justify-between">
                <span className="text-sm font-medium text-espresso">
                  {r.name}
                </span>
                <span className="text-[11px] uppercase tracking-[0.24em] text-mocha">
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
