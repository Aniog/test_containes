import React from "react";
import { StarRating } from "../ui/StarRating";

const testimonials = [
  {
    id: 1,
    text: "The quality is exceptional. I've worn my huggies every day for six months and they still look brand new.",
    name: "Elena M.",
    rating: 5,
  },
  {
    id: 2,
    text: "Bought the Royal Heirloom Set as a gift for my sister. She cried when she opened it. Worth every penny.",
    name: "Sofia R.",
    rating: 5,
  },
  {
    id: 3,
    text: "Finally found jewelry that doesn't turn my skin green. The gold tone is so warm and beautiful.",
    name: "Aisha K.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section bg-[var(--color-bg-alt)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.15em] text-[var(--color-text-muted)] uppercase">In Their Words</span>
          <h2 className="heading-serif text-4xl mt-1">Loved by Our Community</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8">
              <StarRating rating={t.rating} size={14} />
              <blockquote className="mt-6 text-[var(--color-text-muted)] leading-relaxed">
                "{t.text}"
              </blockquote>
              <p className="mt-6 text-sm font-medium tracking-wide">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
