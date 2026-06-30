import React from "react";
import { TESTIMONIALS } from "@/data/products";
import StarRating from "@/components/ui/StarRating";

export default function HomeTestimonials() {
  return (
    <section className="bg-bone">
      <div className="container-editorial py-20 md:py-28">
        <div className="max-w-xl mb-12 md:mb-16">
          <div className="label-eyebrow text-mute mb-3">What people are saying</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
            Quiet love,
            <br />
            <em className="italic">out loud.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="bg-ivory p-8 md:p-10 border border-line/60"
            >
              <StarRating value={t.rating} size="lg" />
              <blockquote className="mt-6 font-display text-xl md:text-2xl leading-snug text-ink italic">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] tracking-[0.32em] uppercase text-mute">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
