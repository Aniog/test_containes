import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Artwork from "@/components/ui/Artwork";
import { UGC_REELS } from "@/data/products";
import { cn } from "@/lib/utils";

export default function HomeUgcReel() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="label-eyebrow text-mute mb-3">@velmora · On You</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] text-ink">
              Worn by you.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Scroll reels left"
              className="w-10 h-10 border border-line rounded-full flex items-center justify-center hover:border-ink transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Scroll reels right"
              className="w-10 h-10 border border-line rounded-full flex items-center justify-center hover:border-ink transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge reel track */}
      <div className="pl-6 md:pl-12 lg:pl-[max(48px,calc((100vw-1440px)/2+80px))]">
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 pr-6 md:pr-12"
        >
          {UGC_REELS.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReelCard({ reel }) {
  return (
    <article className="snap-start shrink-0 w-[60vw] sm:w-[260px] md:w-[280px] aspect-[9/16] relative overflow-hidden group">
      <Artwork
        variant={reel.art}
        tone="deep"
        className="absolute inset-0 w-full h-full"
      />
      {/* Caption overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 text-ivory">
        <div className="font-display text-2xl md:text-3xl leading-tight italic">
          {reel.caption}
        </div>
        <div className="mt-2 text-[11px] tracking-[0.22em] uppercase text-ivory/80">
          {reel.handle}
        </div>
      </div>
      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-ivory/15 backdrop-blur-sm flex items-center justify-center text-ivory/90 group-hover:bg-ivory/25 transition-colors">
        <Play className="w-3.5 h-3.5" fill="currentColor" />
      </div>
    </article>
  );
}
