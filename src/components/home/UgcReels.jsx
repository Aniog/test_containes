import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { UGC_REELS } from "@/data/catalog";
import { ReelEarArt } from "@/components/jewelry-illustrations/JewelryArt";

const UgcReels = () => {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-ink py-20 md:py-28 text-cream">
      <div className="container-velmora">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-cream/60">#WornWithVelmora</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              On them, in <em className="not-italic text-gold-shine">their</em> world
            </h2>
            <p className="mt-3 max-w-md text-sm text-cream/70">
              A small reel of our community wearing Velmora in their everyday.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="grid h-10 w-10 place-items-center border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="grid h-10 w-10 place-items-center border border-cream/30 text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="reel-scroll mt-12 px-6 md:px-10"
        style={{ paddingRight: "max(24px, env(safe-area-inset-right))" }}
      >
        {UGC_REELS.map((reel, i) => (
          <figure
            key={i}
            className="relative snap-start flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] aspect-[9/16] overflow-hidden bg-muted"
          >
            <ReelEarArt className="absolute inset-0 h-full w-full" variant={i} />
            {/* Subtle gradient for caption */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/85 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest2 text-cream/80">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/40 backdrop-blur-sm px-2 py-1">
                  <Play size={9} strokeWidth={2} fill="currentColor" />
                  Reel
                </span>
                <span>{reel.handle}</span>
              </div>
              <figcaption className="font-serif text-2xl leading-tight text-cream italic">
                {reel.caption}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default UgcReels;
