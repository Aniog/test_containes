import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    text: "The quality exceeded my expectations. I wear my Golden Sphere Huggies every single day and they still look brand new after 6 months.",
    rating: 5,
  },
  {
    id: 2,
    name: "Emily R.",
    text: "Bought the Royal Heirloom Set as a birthday gift for my sister. She teared up. The packaging is absolutely gorgeous.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica T.",
    text: "Finally, demi-fine jewelry that doesn't turn my ears green. These are so comfortable I sleep in them.",
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={0}
          className={i < count ? "fill-velmora-gold text-velmora-gold" : "fill-velmora-stone text-velmora-stone"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-velmora-sand/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide">Loved By You</h2>
          <p className="mt-3 text-sm text-velmora-mocha">Real reviews from real customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-sm p-6 sm:p-8 shadow-sm border border-velmora-stone/10"
            >
              <Stars count={r.rating} />
              <p className="mt-4 text-[15px] text-velmora-ink leading-relaxed">
                "{r.text}"
              </p>
              <p className="mt-5 text-xs font-medium tracking-[0.15em] uppercase text-velmora-taupe">
                {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
