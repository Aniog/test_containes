import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PLACEHOLDER_SRC } from "@/components/ui/StrkImg";
import Reveal from "@/components/ui/Reveal";

export default function BrandStory() {
  return (
    <section className="border-y border-line bg-cream py-16 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal className="relative">
          <div className="overflow-hidden">
            <img
              data-strk-img-id="story-atelier-01"
              data-strk-img="[story-heading] [story-body] [story-eyebrow]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={PLACEHOLDER_SRC}
              alt="Goldsmith hands crafting gold jewelry in a warm atelier"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden bg-ink px-8 py-6 md:block">
            <p className="font-serif text-4xl font-medium text-gold-soft">18k</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-ivory/70">
              Gold Plated
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p
            id="story-eyebrow"
            className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold-deep"
          >
            Our Atelier
          </p>
          <h2
            id="story-heading"
            className="mt-4 font-serif text-4xl font-medium leading-tight text-ink md:text-5xl"
          >
            Jewelry made slowly,
            <br />
            <em className="italic text-gold-deep">worn forever.</em>
          </h2>
          <p
            id="story-body"
            className="mt-6 max-w-lg text-sm leading-relaxed text-bronze md:text-base"
          >
            Velmora began at a single goldsmith's bench, with a belief that
            fine jewelry shouldn't wait for special occasions. Each piece is
            sketched in our studio, cast in recycled brass, and hand-finished
            with a generous layer of 18k gold — then polished, inspected, and
            tucked into its pouch by hand.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-bronze md:text-base">
            The result is demi-fine jewelry with the weight and warmth of
            heirloom gold, at a price that invites everyday wear.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-ink underline decoration-gold underline-offset-8 transition-colors hover:text-gold-deep"
            >
              Our Story
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
