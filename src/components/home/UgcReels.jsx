import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { PLACEHOLDER_IMG, ugcReels } from "@/data/products";

export default function UgcReels() {
  const scrollerRef = useRef(null);

  const scrollBy = (direction) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollBy({ left: direction * 280, behavior: "smooth" });
  };

  return (
    <section className="border-y border-line bg-cream/70 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-bronze">
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
              @velmora.jewelry
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium leading-[1.08] text-espresso md:text-5xl">
              Worn &amp; Treasured
            </h2>
          </div>
          <div className="hidden gap-3 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll reels left"
              className="flex h-11 w-11 items-center justify-center border border-espresso/25 text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-ivory"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll reels right"
              className="flex h-11 w-11 items-center justify-center border border-espresso/25 text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-ivory"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="scrollbar-none reveal mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:gap-5 md:px-10"
      >
        {ugcReels.map((reel) => (
          <figure
            key={reel.id}
            className="group relative aspect-[9/16] w-[210px] shrink-0 snap-start overflow-hidden bg-espresso md:w-[240px]"
          >
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.captionId}] [${reel.handleId}] ${reel.scene}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={PLACEHOLDER_IMG}
              alt={`${reel.caption} — styled by ${reel.handle}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/75 via-transparent to-espresso/10" />
            <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ivory/15 text-ivory backdrop-blur">
              <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
            <figcaption className="absolute inset-x-0 bottom-0 p-4">
              <span
                id={reel.captionId}
                className="block font-serif text-lg italic leading-snug text-ivory"
              >
                {reel.caption}
              </span>
              <span
                id={reel.handleId}
                className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-ivory/75"
              >
                {reel.handle}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
