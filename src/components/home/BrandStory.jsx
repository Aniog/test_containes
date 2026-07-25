import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function BrandStory() {
  return (
    <section className="border-y border-sand bg-ivory py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              data-strk-img-id="story-img-6d34fa"
              data-strk-img="[story-body] [story-title] artisan atelier hands crafting warm tones"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Hands crafting gold jewelry in the Velmora atelier"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-5 -right-3 hidden bg-gold px-7 py-5 font-serif text-2xl italic text-white md:block">
            Est. 2019
          </span>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Our Story
          </p>
          <h2
            id="story-title"
            className="mt-4 font-serif text-4xl font-medium leading-tight text-ink md:text-5xl"
          >
            Heirloom feeling, <br />
            <em className="italic">honest</em> prices
          </h2>
          <p
            id="story-body"
            className="mt-6 max-w-lg text-base leading-relaxed text-espresso"
          >
            Velmora began at a single jeweler’s bench with a simple belief: the
            pieces you reach for every day should be made like the ones you’d
            inherit. We work in small batches, plate in a thick layer of 18K
            gold over recycled brass, and finish every piece by hand — then sell
            directly to you, without the traditional markup.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-espresso">
            The result is demi-fine jewelry that lives between costume and fine:
            luminous, lasting, and priced for real life.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-[11px] uppercase tracking-[0.22em] text-espresso transition-colors hover:text-gold"
          >
            Read Our Story <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
