import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { REELS } from "@/data/products";
export default function ReelsRow() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-page mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex items-end justify-between mb-10 md:mb-14 gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-wider2 text-gold mb-3">@velmora.jewelry</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">Worn, Loved, Shared</h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 border border-ink text-ink hover:bg-ink hover:text-ivory transition flex items-center justify-center"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 border border-ink text-ink hover:bg-ink hover:text-ivory transition flex items-center justify-center"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
      >
        <ul className="flex gap-4 md:gap-6 px-5 md:px-10 lg:px-16 pb-2">
          {REELS.map((reel) => (
            <li
              key={reel.id}
              className="relative flex-shrink-0 w-[230px] md:w-[280px] aspect-[9/16] bg-ink overflow-hidden group"
            >
              <img
          data-strk-img-id={`reel-${reel.id}`}
          data-strk-img={`[${reel.queryDesc}] [${reel.queryTitle}] gold jewelry on woman lifestyle`}
          data-strk-img-ratio="9x16"
          data-strk-img-width={500}
          alt={reel.caption}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <p
                id={reel.queryTitle}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg text-ivory leading-snug"
              >
                {reel.caption}
              </p>
              <p id={reel.queryDesc} className="sr-only">
                {reel.caption} — Velmora gold jewelry styled in real life.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
