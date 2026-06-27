import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import { TESTIMONIALS } from "@/data/products";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="mb-12 md:mb-16">
          <SectionHeading
            align="center"
            eyebrow="From our community"
            title="Quietly Loved"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col gap-5 p-8 md:p-10 bg-velmora-ivory border border-velmora-line"
            >
              <StarRating rating={5} showCount={false} />
              <blockquote className="font-serif text-xl md:text-2xl text-velmora-espresso font-light leading-snug italic">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-auto pt-4 border-t border-velmora-line text-[11px] uppercase tracking-[0.28em] text-velmora-mocha">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
