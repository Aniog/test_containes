import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Isabel M.",
    rating: 5,
    quote:
      "I wear the Vivid Aura cuff almost every day. It looks like a piece three times the price — and has held up beautifully after months of wear.",
    piece: "Vivid Aura Jewels",
  },
  {
    name: "Maya L.",
    rating: 5,
    quote:
      "Bought the Royal Heirloom set for my sister's birthday. She literally gasped. The packaging alone is a gift — the jewelry inside is the real show.",
    piece: "Royal Heirloom Set",
  },
  {
    name: "Noor A.",
    rating: 5,
    quote:
      "Finally, demi-fine that doesn't scream 'demi-fine.' Quiet, weighty, well-made. The huggies live in my ear.",
    piece: "Golden Sphere Huggies",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-100 py-20 md:py-28 border-y border-cream-200">
      <div className="container-editorial">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="eyebrow mb-3">From our community</p>
          <h2 className="font-serif font-light text-ink-900 text-[36px] md:text-[52px] leading-[1.04]">
            Worn, gifted, <span className="italic">treasured</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="bg-cream-50 p-8 md:p-10 flex flex-col"
            >
              <div className="flex items-center gap-0.5 text-gold-600" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5"
                    strokeWidth={0}
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="mt-5 font-serif text-[20px] md:text-[22px] leading-snug text-ink-900 flex-1">
                <span aria-hidden="true" className="font-serif text-3xl text-gold-500 mr-1">“</span>
                {r.quote}
              </p>
              <div className="mt-6 pt-6 border-t border-cream-200">
                <p className="text-sm font-medium text-ink-900">
                  {r.name}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-btn text-ink-700">
                  On the {r.piece}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
