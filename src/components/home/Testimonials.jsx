import React from "react";
import Container from "@/components/common/Container";
import Stars from "@/components/common/Stars";

const REVIEWS = [
  {
    id: 1,
    name: "Sophia L.",
    rating: 5,
    text: "I've worn the Golden Sphere huggies every day for six months. They still look brand new — and they go with literally everything.",
    product: "Golden Sphere Huggies",
  },
  {
    id: 2,
    name: "Amara K.",
    rating: 5,
    text: "Bought the heirloom set for my sister's birthday. The packaging alone made me cry. The jewelry inside made us both cry.",
    product: "Royal Heirloom Set",
  },
  {
    id: 3,
    name: "Elena M.",
    rating: 5,
    text: "Quiet, refined, the right kind of weight. These pieces feel like treasures — and they don't tarnish, even with daily wear.",
    product: "Vivid Aura Jewels",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-cream">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="label-eyebrow text-muted">From our community</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-4 leading-[1.05]">
            Treasured by thousands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((r) => (
            <figure
              key={r.id}
              className="bg-cream-paper border border-hairline p-8 sm:p-10 flex flex-col"
            >
              <Stars rating={r.rating} />
              <blockquote className="mt-5 font-serif text-lg sm:text-xl text-ink leading-snug">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-hairline">
                <p className="label-product text-ink">{r.name}</p>
                <p className="text-xs text-muted mt-1">
                  Verified · {r.product}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
