import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StrkImage from "@/components/StrkImage";

export default function StorySection() {
  return (
    <section className="border-y border-noir-line bg-noir-soft">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <div className="relative overflow-hidden rounded-sm border border-noir-line">
          <div className="aspect-[4/5] w-full md:aspect-[5/6]">
            <StrkImage
              imgId="story-atelier-img-b8c9d0"
              query="[story-heading] artisan jeweler's hands crafting gold jewelry in a warm atelier, editorial photography"
              ratio="4x5"
              width={900}
              alt="The Velmora atelier"
              imgClassName="transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute bottom-4 left-4 border border-gold/40 bg-noir/80 px-4 py-2 backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-luxe text-gold">
              Est. 2019 — The Atelier
            </p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-luxe text-gold">Our Story</p>
          <h2
            id="story-heading"
            className="mt-4 font-serif text-3xl font-medium leading-tight text-cream md:text-5xl"
          >
            Quiet luxury, made for <span className="italic text-gold-soft">every day</span>
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-sand md:text-base">
            <p>
              Velmora began at a single jeweler's bench with a simple belief: the pieces you reach
              for daily should feel as considered as the ones you save for occasions.
            </p>
            <p>
              Every design is cast in recycled brass, finished in a generous layer of 18K gold,
              and set by hand — hypoallergenic, nickel-free, and made to move with you from morning
              coffee to midnight.
            </p>
          </div>
          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-luxe text-gold transition-colors hover:text-gold-deep"
          >
            Read our story
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
