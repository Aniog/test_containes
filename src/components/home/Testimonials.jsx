import React from "react";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Sophia M.",
    text: "The most elegant pieces I own. They feel expensive without the markup, and I get compliments every time I wear them.",
  },
  {
    id: 2,
    name: "Emily R.",
    text: "Bought the Royal Heirloom Set as a birthday gift. The packaging was beautiful and my sister hasn’t taken it off.",
  },
  {
    id: 3,
    name: "Ava L.",
    text: "Finally, huggies that are comfortable all day and don’t tarnish. Already ordering a second pair.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-velmora-stone px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold">
            Reviews
          </p>
          <h2 className="font-serif text-4xl font-medium md:text-5xl">
            Loved by You
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="border border-velmora-border bg-velmora-cream p-8 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex gap-0.5 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-base leading-relaxed text-velmora-charcoal">
                “{review.text}”
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-velmora-muted">
                {review.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
