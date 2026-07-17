import React, { useRef } from "react";
import { reelCards } from "@/data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ReelsRow() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-reel-card]");
    const step = card ? card.clientWidth + 16 : 280;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="reels-title"
      className="py-20 md:py-28 bg-ivory-soft"
    >
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="kicker mb-3">Worn by you</p>
            <h2
              id="reels-title"
              className="font-serif text-3xl md:text-5xl font-light leading-[1.1] text-ink text-balance"
            >
              From the circle, in real life.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 border border-hairline hover:border-espresso flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 border border-hairline hover:border-espresso flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pl-6 md:pl-10 lg:pl-16 pr-6 md:pr-10 lg:pr-16"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {reelCards.map((card, idx) => (
          <article
            key={card.id}
            data-reel-card
            className="relative shrink-0 w-[60vw] sm:w-[40vw] md:w-[280px] aspect-[9/16] overflow-hidden bg-espresso group"
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              alt={`Reel by ${card.handle}`}
              data-strk-img-id={`reel-img-${idx}-a7b8c9`}
              data-strk-img={`[reel-caption-${card.id}] [reels-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="absolute inset-0 w-full h-full object-cover"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-5 text-ivory">
              <p
                id={`reel-caption-${card.id}`}
                className="font-serif text-xl md:text-2xl font-light italic leading-[1.2] mb-2 text-balance"
              >
                {card.caption}
              </p>
              <p className="text-[11px] uppercase tracking-wider-2 text-ivory/70">
                {card.handle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
