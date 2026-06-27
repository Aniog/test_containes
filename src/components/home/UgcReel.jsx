import * as React from "react";
import { UGC_REELS } from "@/data/products";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

export function UgcReel() {
  const headingRef = useReveal();
  const scrollerRef = React.useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.6 * dir;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <section className="bg-cocoa py-20 md:py-32 text-bone">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <div ref={headingRef} className="reveal">
            <p className="text-[11px] uppercase tracking-eyebrow font-medium text-gold-light">
              @velmora
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-bone">
              Worn by you
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 inline-flex items-center justify-center border border-hairline-dark text-bone hover:bg-bone hover:text-cocoa transition-colors duration-300"
            >
              <ArrowIcon className="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 inline-flex items-center justify-center border border-hairline-dark text-bone hover:bg-bone hover:text-cocoa transition-colors duration-300"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge reel (full bleed on mobile) */}
      <div
        ref={scrollerRef}
        className={cn(
          "no-scrollbar overflow-x-auto",
          "snap-x snap-mandatory",
          "px-6 md:px-10 max-w-[1280px] mx-auto"
        )}
      >
        <ul className="flex gap-4 md:gap-6 pb-2">
          {UGC_REELS.map((reel) => (
            <li
              key={reel.id}
              className="snap-start flex-shrink-0 w-[58vw] sm:w-[260px] md:w-[220px] lg:w-[240px]"
            >
              <ReelCard reel={reel} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ReelCard({ reel }) {
  return (
    <figure className="relative aspect-[9/16] overflow-hidden bg-cocoa-soft group">
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={reel.caption}
        data-strk-img-id={`ugc-${reel.id}`}
        data-strk-img={reel.query}
        data-strk-img-ratio="9x16"
        data-strk-img-width="600"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      {/* Soft dark gradient at the bottom for caption legibility */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cocoa/85 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        <p className="font-serif text-xl md:text-2xl text-bone leading-snug">
          {reel.caption}
        </p>
      </figcaption>
    </figure>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M2 7h10" />
      <path d="M8 3l4 4-4 4" />
    </svg>
  );
}
