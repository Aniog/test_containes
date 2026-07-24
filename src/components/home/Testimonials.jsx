import React from "react";
import { Quote } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import SectionHeader from "@/components/ui/SectionHeader";

const REVIEWS = [
  {
    quote:
      "I bought the Golden Sphere Huggies as a treat for myself — six months later, I bought a second pair because I never want to be without them. They feel like real gold.",
    name: "Isla M.",
    location: "Brooklyn, NY",
  },
  {
    quote:
      "Packaging alone made me cry. The Royal Heirloom Set was a gift for my sister — she wore them to her rehearsal dinner and refuses to take them off.",
    name: "Clementine H.",
    location: "Charleston, SC",
  },
  {
    quote:
      "Finally — gold that doesn't turn my ears green, doesn't cost a month of rent, and looks like my grandmother's things. Velmora is everything.",
    name: "Noor J.",
    location: "London, UK",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12">
        <div className="reveal">
          <SectionHeader
            eyebrow="Loved by 12,000+ women"
            title="Quietly, in their own words"
            align="center"
          />
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className="bg-bone p-8 md:p-10 flex flex-col reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote className="w-5 h-5 text-gold" strokeWidth={1.4} />
              <p className="mt-6 font-serif text-[19px] md:text-xl leading-relaxed text-ink font-light">
                "{r.quote}"
              </p>
              <div className="mt-8 pt-6 border-t border-hairline">
                <StarRating rating={5} />
                <p className="mt-3 text-sm font-medium text-ink">{r.name}</p>
                <p className="text-[11px] uppercase tracking-wide-2 text-cocoa">
                  {r.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
