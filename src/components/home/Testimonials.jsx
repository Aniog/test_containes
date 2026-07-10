import React from "react";
import { StarRating } from "@/components/ui/Primitives";

const reviews = [
  {
    id: 1,
    name: "Amelia R.",
    title: "Finally, my forever pair",
    body: "I bought the Golden Sphere Huggies on a whim and now I haven't taken them off in three months. The weight is what got me — they feel like real gold, not costume. Quietly the best $38 I've ever spent.",
  },
  {
    id: 2,
    name: "Priya S.",
    title: "Gifted the heirloom set",
    body: "The Royal Heirloom Set was for my sister's wedding. She opened the box and literally gasped. The packaging, the weight, the finish — it felt like something ten times the price. I'm buying one for myself next.",
  },
  {
    id: 3,
    name: "Margot D.",
    title: "Demi-fine that actually lasts",
    body: "I have sensitive ears and usually can't wear plated jewelry for more than a few hours. The Vivid Aura cuff — I've slept in it, showered in it (oops), and the finish is still perfect. Plus no green ears. Sold for life.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <p className="editorial-eyebrow mb-3">From our community</p>
          <h2 className="serif-display text-3xl md:text-5xl lg:text-[56px] leading-[1.05] text-cocoa max-w-2xl mx-auto">
            Worn, gifted, treasured.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline">
          {reviews.map((r) => (
            <article key={r.id} className="bg-ivory p-8 md:p-10 lg:p-12 flex flex-col">
              <StarRating rating={5} size={14} />
              <h3 className="serif-display text-2xl md:text-[28px] leading-snug text-cocoa mt-6">
                {r.title}
              </h3>
              <p className="mt-5 text-sm md:text-[15px] text-cocoa-soft leading-relaxed flex-1">
                "{r.body}"
              </p>
              <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-claret">
                — {r.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
