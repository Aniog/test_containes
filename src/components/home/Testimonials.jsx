import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";

function Stars({ count = 5 }) {
  return (
    <div className="inline-flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 fill-gold text-gold"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-bone text-ink py-20 md:py-28">
      <div className="container-editorial">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow">From our community</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light leading-[1.05]">
            Words from wearers
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.id}
              className="bg-cream p-8 md:p-10 flex flex-col text-center"
            >
              <Stars count={t.rating} />
              <p className="mt-6 font-serif text-lg md:text-xl leading-relaxed text-ink text-pretty">
                “{t.body}”
              </p>
              <p className="mt-8 font-sans text-[11px] uppercase tracking-editorial text-muted-light">
                — {t.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
