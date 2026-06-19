import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { REELS } from "@/data/products";
import Reveal from "@/components/ui/Reveal";
import StockImage from "@/components/ui/StockImage";

const REEL_QUERIES = {
  "reel-1": "velmora ear stack model editorial close up gold earrings soft light",
  "reel-2": "velmora crystal necklace floral editorial warm motion shot model",
  "reel-3": "velmora gold huggie hoops on ear editorial close up portrait",
  "reel-4": "velmora gold jewelry golden hour close up portrait warm skin",
  "reel-5": "velmora royal heirloom gift box unboxing velvet cream warm",
  "reel-6": "velmora layered necklaces editorial close up soft focus portrait",
};

export default function ReelsRow() {
  const railRef = useRef(null);

  const scroll = (dir) => {
    const node = railRef.current;
    if (!node) return;
    const card = node.querySelector("[data-reel-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 280;
    node.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-ink text-cream">
      <div className="mx-auto max-w-page px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
            <div>
              <p className="vm-eyebrow text-gold-soft">Worn by you</p>
              <h2 className="vm-display text-cream mt-3 text-4xl md:text-6xl leading-[1.05]">
                <span className="italic font-light">@velmora</span> &nbsp;on&nbsp;reels.
              </h2>
              <p className="mt-5 max-w-md text-cream/70 text-sm md:text-base">
                Tag us to be featured — selected stories are woven into the next chapter of the collection.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                aria-label="Scroll reels left"
                onClick={() => scroll(-1)}
                className="w-11 h-11 grid place-items-center border border-cream/25 hover:border-gold-soft hover:text-gold-soft transition-colors text-cream"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1.4} />
              </button>
              <button
                type="button"
                aria-label="Scroll reels right"
                onClick={() => scroll(1)}
                className="w-11 h-11 grid place-items-center border border-cream/25 hover:border-gold-soft hover:text-gold-soft transition-colors text-cream"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1.4} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div
          ref={railRef}
          className="no-scrollbar overflow-x-auto scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <ul className="flex gap-4 md:gap-5 px-5 md:px-10 pb-4">
            {REELS.map((reel) => (
              <li
                key={reel.id}
                data-reel-card
                className="relative flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] aspect-[9/16] overflow-hidden bg-ink/60 group"
                style={{ scrollSnapAlign: "start" }}
              >
                <StockImage
                  imgId={reel.id}
                  query={REEL_QUERIES[reel.id] || `velmora ${reel.category} editorial warm`}
                  ratio="9x16"
                  width="600"
                  alt={reel.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/80" />
                <div className="absolute top-3 left-3 w-9 h-9 grid place-items-center rounded-full bg-cream/95 text-ink">
                  <Play className="w-3.5 h-3.5 fill-ink" strokeWidth={0} />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="vm-serif text-2xl leading-tight text-cream">
                    {reel.caption}
                  </p>
                  <p className="vm-eyebrow text-cream/60 mt-2">@velmora · #velmoradiary</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
