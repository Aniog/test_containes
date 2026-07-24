import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: "t1",
    name: "Amelia R.",
    rating: 5,
    body: "The Sphere Huggies feel weighty in the best way — like real gold. I haven't taken them off since they arrived.",
    product: "Golden Sphere Huggies",
  },
  {
    id: "t2",
    name: "Priya M.",
    rating: 5,
    body: "Gifted the Flora necklace to my mum — the box, the card, the weight of it. She cried. I ordered one for myself immediately.",
    product: "Majestic Flora Nectar",
  },
  {
    id: "t3",
    name: "Jordyn K.",
    rating: 5,
    body: "I have sensitive ears and these don't react at all. I can finally wear cute earrings again. Subscription secured.",
    product: "Vivid Aura Jewels",
  },
];

function Stars({ n = 5 }) {
  return (
    <div className="flex items-center gap-0.5 text-gold-500" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>
  );
}

export default function HomeTestimonials() {
  return (
    <section className="bg-ivory-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Loved by Thousands</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800 text-balance">
            From the women who wear them
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.id}
              className="flex h-full flex-col justify-between border border-ink-800/10 bg-ivory-100 p-7 sm:p-8"
            >
              <div>
                <Stars n={r.rating} />
                <blockquote className="mt-5 font-serif text-xl leading-snug text-ink-800 text-balance">
                  "{r.body}"
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center justify-between border-t border-ink-800/10 pt-4 text-[11px] font-sans uppercase tracking-widest2 text-ink-500">
                <span>— {r.name}</span>
                <span className="text-ink-700/80">{r.product}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
