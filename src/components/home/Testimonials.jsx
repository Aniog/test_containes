import React from "react";
import { Quote } from "lucide-react";
import StarRating from "@/components/ui/StarRating.jsx";
import { useReveal } from "@/lib/useReveal.js";

const reviews = [
  {
    id: "t1",
    quote:
      "I've worn the huggies every day for six months — the gold is still warm and bright. I keep finding reasons to add more.",
    name: "Maya K.",
    rating: 5,
    titleId: "testimonial-1-title",
  },
  {
    id: "t2",
    quote:
      "Ordered the Flora necklace for my sister's birthday. The packaging alone made us both tear up. The necklace, too.",
    name: "Ines W.",
    rating: 5,
    titleId: "testimonial-2-title",
  },
  {
    id: "t3",
    quote:
      "Quiet, considered, real. The kind of jewelry that gets softer the more you wear it. I've already given two as gifts.",
    name: "Noor E.",
    rating: 5,
    titleId: "testimonial-3-title",
  },
];

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section className="bg-sand-100 py-20 sm:py-28">
      <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
        <div ref={ref} className="reveal flex flex-col items-center text-center mb-12 sm:mb-16">
          <p className="eyebrow text-muted-500">Kind Words</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800">
            From the wearers
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((r) => (
            <li
              key={r.id}
              className="bg-cream-100 border border-hairline/70 p-7 sm:p-8 flex flex-col"
            >
              <Quote className="w-6 h-6 text-gold-400 flex-none" strokeWidth={1.25} />
              <p
                id={r.titleId}
                className="mt-5 font-serif text-lg sm:text-xl leading-relaxed text-ink-800 italic"
              >
                "{r.quote}"
              </p>
              <div className="mt-auto pt-6 flex items-center justify-between">
                <p className="text-[11px] tracking-[0.28em] uppercase text-ink-800 font-medium">
                  {r.name}
                </p>
                <StarRating value={r.rating} size={12} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
