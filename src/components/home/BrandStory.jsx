import React from "react";
import { Link } from "react-router-dom";
import { strkSrc } from "@/lib/strkSrc";

export default function BrandStory() {
  return (
    <section className="border-y border-line bg-cream/70">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
        <div className="reveal relative">
          <div className="overflow-hidden">
            <img
              data-strk-img-id="story-atelier-6c4e28"
              data-strk-img="[story-text] [story-kicker]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={strkSrc("story-atelier-6c4e28")}
              alt="A jeweler's hands crafting gold jewelry in the Velmora atelier"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] md:aspect-[4/4.6]"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden bg-espresso px-8 py-6 text-center md:block">
            <p className="font-serif text-4xl font-medium text-gold-soft">7</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-ivory/80">
              Years of Craft
            </p>
          </div>
        </div>

        <div className="reveal">
          <p
            id="story-kicker"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-bronze"
          >
            Our Atelier
          </p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.1] text-espresso md:text-5xl">
            Quiet pieces,
            <br />
            made to be worn <em className="italic text-bronze">loudly</em>
          </h2>
          <p id="story-text" className="mt-6 text-base leading-relaxed text-cocoa">
            Velmora began at a single jeweler's bench with one belief: fine
            jewelry shouldn't wait for special occasions. We plate every piece
            in a generous layer of 18k gold over recycled brass — thick enough
            for daily wear, priced so you never have to save it for someday.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cocoa">
            Each design is finished by hand in small batches, hypoallergenic
            and tarnish-resistant, so the pieces you love stay the pieces you
            reach for.
          </p>
          <Link
            to="/about"
            className="group mt-9 inline-flex items-center gap-3 border border-espresso px-8 py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-espresso transition-all duration-300 hover:bg-espresso hover:text-ivory"
          >
            Our Story
            <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
          </Link>
        </div>
      </div>
    </section>
  );
}
