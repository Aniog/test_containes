import React from "react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const reels = [
  {
    id: "ugc-1",
    handle: "@noor.aurelia",
    caption: "morning stack — Golden Sphere + Vivid Aura",
  },
  {
    id: "ugc-2",
    handle: "@maya.elwood",
    caption: "wedding guest, perfected.",
  },
  {
    id: "ugc-3",
    handle: "@lila.atelier",
    caption: "the heirloom set, unboxed",
  },
  {
    id: "ugc-4",
    handle: "@sienna.mori",
    caption: "office to opera",
  },
  {
    id: "ugc-5",
    handle: "@elena.vesper",
    caption: "amber lace, golden hour",
  },
  {
    id: "ugc-6",
    handle: "@rose.kalin",
    caption: "luna huggies — never off",
  },
  {
    id: "ugc-7",
    handle: "@talia.brielle",
    caption: "a study in restraint",
  },
  {
    id: "ugc-8",
    handle: "@isla.marlowe",
    caption: "celeste pearl, every day",
  },
];

function ReelCard({ reel }) {
  const captionId = `reel-${reel.id}-caption`;
  const handleId = `reel-${reel.id}-handle`;
  return (
    <div className="snap-start shrink-0 w-[68vw] sm:w-[280px] md:w-[260px] lg:w-[280px]">
      <div className="relative aspect-[9/16] bg-cocoa overflow-hidden group">
        <img
          alt={reel.handle}
          data-strk-img-id={`${reel.id}-img`}
          data-strk-img={`[${captionId}] [${handleId}] gold jewelry worn by woman editorial portrait`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
        />
        {/* Soft gradient overlay for caption legibility */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-cocoa/85 via-cocoa/30 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p id={captionId} className="serif-display text-2xl md:text-[26px] text-ivory-light leading-tight">
            {reel.caption}
          </p>
          <p id={handleId} className="mt-3 text-[10px] uppercase tracking-[0.22em] text-gold-soft">
            {reel.handle}
          </p>
        </div>
        {/* Reel play affordance */}
        <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-ivory-light/90 flex items-center justify-center" aria-hidden="true">
          <span className="block w-0 h-0 ml-0.5 border-y-[5px] border-y-transparent border-l-[8px] border-l-cocoa" />
        </div>
      </div>
    </div>
  );
}

export default function UGCReelRow() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    if (!scrollerRef.current) return;
    const w = scrollerRef.current.clientWidth * 0.8;
    scrollerRef.current.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section className="bg-ivory-dark py-20 md:py-28">
      <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12">
        <div className="flex items-end justify-between mb-10 md:mb-12">
          <div>
            <p className="editorial-eyebrow mb-3">Worn by you</p>
            <h2 className="serif-display text-3xl md:text-5xl lg:text-[56px] leading-[1.05] text-cocoa">
              The Velmora reel
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll reels left"
              className="h-11 w-11 border border-hairline hover:border-cocoa flex items-center justify-center text-cocoa transition-colors"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll reels right"
              className="h-11 w-11 border border-hairline hover:border-cocoa flex items-center justify-center text-cocoa transition-colors"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge scroller */}
      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-3 md:gap-4 px-5 md:px-8 lg:px-12"
        style={{ scrollPaddingLeft: "1.25rem" }}
      >
        {reels.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
        {/* Spacer at end so last card can snap into view with padding */}
        <div className="shrink-0 w-1" aria-hidden="true" />
      </div>
    </section>
  );
}
