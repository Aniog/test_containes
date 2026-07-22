import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { StrkImage } from "@/components/ui/StrkMedia";

export default function BrandStory() {
  return (
    <section className="border-y border-line bg-sand">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 md:py-24 lg:px-12 lg:py-28">
        {/* Image */}
        <div className="reveal relative order-1">
          <StrkImage
            imgId="story-img-1f7c9a"
            query="[story-title] [story-lead] artisan crafting gold jewelry, warm atelier light, editorial"
            ratio="4x3"
            width={900}
            alt="The Velmora atelier"
            className="aspect-[4/3] w-full rounded-sm shadow-card"
          />
          <div className="absolute -bottom-5 -right-4 hidden h-24 w-24 items-center justify-center rounded-full border border-gold bg-cream px-3 text-center shadow-soft md:flex">
            <span className="font-display text-xs font-semibold uppercase leading-tight tracking-widest text-gold">
              Est. 2021
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="reveal order-2 flex flex-col items-start gap-5">
          <span className="font-sans text-xs font-semibold uppercase tracking-overline text-gold">
            Our Story
          </span>
          <h2
            id="story-title"
            className="font-display text-3xl leading-[1.05] text-ink md:text-5xl"
          >
            Jewelry made to be lived in
          </h2>
          <p
            id="story-lead"
            className="max-w-lg text-base leading-relaxed text-inkSoft"
          >
            Velmora began at a single workbench with a simple belief: that
            beautiful, lasting jewelry should not be reserved for special
            occasions. Each piece is designed in-house and finished in warm 18k
            gold — demi-fine by craft, made for every day.
          </p>
          <p className="max-w-lg text-base leading-relaxed text-inkSoft">
            We plate over recycled brass, keep every piece nickel-free and
            hypoallergenic, and stand behind it with a 30-day promise. Quiet
            luxury, honestly priced.
          </p>
          <Link
            to="/about"
            className="group mt-2 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-luxe text-gold"
          >
            Read Our Story
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
