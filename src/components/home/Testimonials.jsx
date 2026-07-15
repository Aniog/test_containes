import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Stars from "@/components/ui/Stars";

const REVIEWS = [
  {
    id: "review-1",
    name: "Amelia R.",
    initial: "A",
    quote:
      "I bought the Royal Heirloom set for my sister's birthday. She hasn't taken it off in three weeks. The packaging alone made me cry.",
  },
  {
    id: "review-2",
    name: "Priya S.",
    initial: "P",
    quote:
      "The Golden Sphere huggies are everything. Heavy-looking, but they barely register on the ear. The finish is unreal for the price.",
  },
  {
    id: "review-3",
    name: "Sofia M.",
    initial: "S",
    quote:
      "I have sensitive ears and gave up on fashion jewelry years ago. Velmora is the first brand that didn't make me pay for it. I'm hooked.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cocoa text-ivory">
      <div className="container-shell py-20 md:py-28">
        <div className="text-ivory max-w-xl mx-auto text-center">
          <span className="eyebrow text-gold-pale">In their words</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05]">
            Loved quietly, kept close.
          </h2>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {REVIEWS.map((r) => (
            <figure
              key={r.id}
              className="bg-cocoa-soft p-8 md:p-10 flex flex-col gap-6"
            >
              <Stars value={5} size={14} className="text-gold-pale" />
              <blockquote className="font-serif text-xl md:text-[22px] leading-snug text-ivory">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-4 border-t border-ivory/15">
                <span
                  className="w-9 h-9 rounded-full bg-gold text-cocoa flex items-center justify-center font-serif text-base"
                  aria-hidden="true"
                >
                  {r.initial}
                </span>
                <span className="text-sm tracking-wide text-ivory/85">
                  {r.name} <span className="text-ivory/50">· Verified Buyer</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
