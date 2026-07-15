import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const REELS = [
  {
    id: "reel-ear-stack",
    handle: "@noor.habibi",
    caption: "The Golden Sphere, every day.",
    query:
      "young woman portrait gold dome huggie earrings worn close up warm light instagram reel aesthetic",
  },
  {
    id: "reel-floral-necklace",
    handle: "@lila.morrow",
    caption: "Majestic Flora, all summer.",
    query:
      "young woman portrait wearing multicolor floral crystal necklace close up warm light instagram aesthetic",
  },
  {
    id: "reel-ear-cuff",
    handle: "@ada.soraya",
    caption: "One cuff. That's the look.",
    query:
      "young woman portrait gold ear cuff with crystal on ear close up warm light instagram aesthetic",
  },
  {
    id: "reel-lace-drops",
    handle: "@maren.ko",
    caption: "Amber Lace, in golden hour.",
    query:
      "young woman portrait gold filigree lace drop earrings worn close up warm light instagram aesthetic",
  },
  {
    id: "reel-heirloom-set",
    handle: "@pari.rae",
    caption: "Heirloom in the making.",
    query:
      "young woman portrait wearing matching gold necklace and huggie earrings set warm light instagram aesthetic",
  },
  {
    id: "reel-ear-stack-2",
    handle: "@yui.harper",
    caption: "Stacking the Velmora edit.",
    query:
      "young woman portrait with multiple gold earrings and ear stack close up warm light instagram aesthetic",
  },
];

function ReelCard({ reel }) {
  return (
    <article
      className="relative shrink-0 w-[68vw] sm:w-[280px] md:w-[260px] aspect-[9/16] overflow-hidden bg-cocoa-soft group"
      aria-label={`${reel.handle}: ${reel.caption}`}
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id={`${reel.id}-bg`}
        data-strk-bg={`[${reel.id}-caption] [${reel.id}-handle]`}
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="700"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cocoa/10 via-transparent to-cocoa/85" />

      {/* Top: handle */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-ivory/90">
        <span
          id={`${reel.id}-handle`}
          className="text-[11px] uppercase tracking-[0.22em]"
        >
          {reel.handle}
        </span>
        <span className="w-7 h-7 rounded-full bg-ivory/15 backdrop-blur flex items-center justify-center">
          <Play size={12} strokeWidth={1.5} className="text-ivory" />
        </span>
      </div>

      {/* Bottom: serif caption */}
      <div className="absolute bottom-0 inset-x-0 p-5">
        <p
          id={`${reel.id}-caption`}
          className="font-serif italic text-ivory text-xl sm:text-2xl leading-snug"
        >
          “{reel.caption}”
        </p>
        <span className="mt-3 inline-block text-[10px] uppercase tracking-[0.28em] text-gold-pale">
          Shop the look
        </span>
      </div>
    </article>
  );
}

export default function UGCReels() {
  const railRef = useRef(null);

  const scrollBy = (dir) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="ugc" className="bg-parchment/60">
      <div className="container-shell pt-20 md:pt-28 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow">@velmora.fine</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.05]">
              Worn by you.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 border border-ink/40 text-ink flex items-center justify-center hover:bg-ink hover:text-ivory transition-colors duration-300"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 border border-ink/40 text-ink flex items-center justify-center hover:bg-ink hover:text-ivory transition-colors duration-300"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={railRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex gap-4 sm:gap-6 px-5 sm:px-8 lg:px-16 pb-16 md:pb-20">
          {REELS.map((reel) => (
            <div key={reel.id} style={{ scrollSnapAlign: "start" }}>
              <ReelCard reel={reel} />
            </div>
          ))}
          <div className="shrink-0 w-2" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
