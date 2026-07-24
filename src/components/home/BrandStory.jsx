import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function BrandStory() {
  return (
    <section id="story" className="bg-sand py-16 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div
              className="aspect-[4/5] w-full rounded-sm bg-cover bg-center shadow-[0_30px_60px_-30px_rgba(33,26,18,0.5)]"
              data-strk-bg-id="story-img-atelier-h1"
              data-strk-bg="[story-body] [story-heading]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="900"
            />
            <div className="absolute -bottom-5 -right-3 bg-cream px-6 py-4 shadow-[0_18px_40px_-24px_rgba(33,26,18,0.5)] md:-right-6">
              <p className="font-serif text-3xl font-light text-gold-deep">Est. 2019</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-widest2 text-taupe">
                Atelier-crafted
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
            Our Story
          </p>
          <h2
            id="story-heading"
            className="mt-4 font-serif text-3xl font-light leading-tight text-ink md:text-5xl"
          >
            Jewelry that honors
            <br />
            <em className="italic">the everyday</em>
          </h2>
          <p id="story-body" className="mt-6 max-w-lg text-sm leading-relaxed text-espresso md:text-base">
            Velmora began in a small sunlit atelier with a single belief: beautiful
            jewelry shouldn't be saved for special occasions. Our artisans hand-finish
            each piece in warm 18K gold plating over recycled metals — jewelry workshop
            craftsmanship designed to move with you, from morning coffee to midnight
            celebrations.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-espresso md:text-base">
            Demi-fine means honest materials, fair prices, and pieces made to be worn
            daily and treasured for years. No markups for the sake of it. No compromise
            on craft.
          </p>
          <Link
            to="/shop"
            className="group mt-8 inline-flex items-center gap-2 border-b border-ink pb-1 text-[11px] font-medium uppercase tracking-widest2 text-ink transition-colors hover:border-gold hover:text-gold-deep"
          >
            Discover the Collection
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
