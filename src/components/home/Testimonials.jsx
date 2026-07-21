import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/products";

function StarRating({ value }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Rated ${value} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={[
            "w-3.5 h-3.5",
            i < value ? "fill-gold-500 text-gold-500" : "text-hairline",
          ].join(" ")}
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-20 sm:py-28 lg:py-32 bg-ivory-100"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-9xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <p className="eyebrow text-taupe-500">Loved by</p>
          <h2
            id="testimonials-title"
            className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] text-espresso"
          >
            A quiet kind of love.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-ivory-50 border border-hairline p-8 sm:p-10 flex flex-col"
            >
              <StarRating value={t.rating} />
              <blockquote className="mt-6 font-serif text-lg sm:text-xl leading-relaxed text-espresso text-balance">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-hairline font-sans text-[11px] uppercase tracking-widest2 text-taupe-500">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
