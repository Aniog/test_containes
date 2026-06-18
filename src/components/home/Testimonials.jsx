import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="In their words"
          title="Quietly adored"
          align="center"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {TESTIMONIALS.map((t) => (
            <figure key={t.id} className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1 text-champagne mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="font-serif text-xl md:text-[22px] leading-snug text-ink italic max-w-sm">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 font-sans uppercase tracking-widest2 text-[11px] text-taupe">
                {t.name} — {t.location}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
