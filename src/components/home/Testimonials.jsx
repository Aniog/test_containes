import React from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Amelia R.",
    rating: 5,
    quote:
      "I wear my Golden Sphere Huggies every day — they still look brand new after months. Worth every penny.",
    product: "Golden Sphere Huggies",
  },
  {
    name: "Sloane K.",
    rating: 5,
    quote:
      "The Royal Heirloom Set was the most thoughtful gift I've ever given. The packaging alone made me cry.",
    product: "Royal Heirloom Set",
  },
  {
    name: "Priya M.",
    rating: 5,
    quote:
      "Finally, demi-fine that doesn't look cheap. The Majestic Flora is now my wedding-day necklace.",
    product: "Majestic Flora Nectar",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16 max-w-xl mx-auto">
          <p className="eyebrow mb-3">What they say</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Treasured by thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="bg-white border border-hairline p-8 md:p-10 flex flex-col"
            >
              <Quote
                className="w-7 h-7 text-gold mb-5"
                strokeWidth={1.5}
              />
              <blockquote className="font-serif text-xl md:text-2xl leading-snug text-espresso">
                "{r.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-1">
                {[...Array(r.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-gold text-gold"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <figcaption className="mt-5 pt-5 border-t border-hairline">
                <p className="font-sans text-sm font-medium text-espresso">
                  {r.name}
                </p>
                <p className="font-sans text-xs text-taupe uppercase tracking-widest2 mt-1">
                  On the {r.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
