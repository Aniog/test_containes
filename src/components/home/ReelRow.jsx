import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { UGC_REELS, UGC_REEL_IMAGES } from "@/data/products";

export default function ReelRow() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-24 bg-cream-warm border-y border-hairline">
      <div className="container-velmora mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <span className="label-eyebrow text-muted">@Velmora · In the Wild</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink mt-4 leading-[1.05]">
            Worn &amp; loved
          </h2>
          <p className="text-muted text-sm sm:text-base mt-3 max-w-md">
            Real customers, real heirlooms in the making. Tag #VelmoraWorn for
            a chance to be featured.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 border border-hairline text-ink hover:bg-ink hover:text-cream transition-colors flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 border border-hairline text-ink hover:bg-ink hover:text-cream transition-colors flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-5 sm:px-8 lg:px-14 pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {UGC_REELS.map((reel, i) => (
          <article
            key={reel.id}
            className="relative flex-shrink-0 snap-start w-[60vw] sm:w-[260px] aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            <img
              src={UGC_REEL_IMAGES[i]}
              alt={`${reel.caption} — ${reel.handle}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            {/* Reel play hint */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-cream/40 flex items-center justify-center text-cream/80 group-hover:text-cream">
              <Play size={10} fill="currentColor" />
            </div>
            {/* Caption */}
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-serif italic text-cream text-lg leading-snug">
                {reel.caption}
              </p>
              <p className="label-eyebrow text-cream/60 text-[0.62rem] mt-2">
                {reel.handle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
