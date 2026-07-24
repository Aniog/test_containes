import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { UgcCardArt } from "@/components/decor/JewelryArt";
import SectionHeader from "@/components/ui/SectionHeader";

const REELS = [
  { caption: "Loved in the light", handle: "@isla.m" },
  { caption: "The everyday stack", handle: "@noor.j" },
  { caption: "Mother of pearl, no — gold.", handle: "@amelia.k" },
  { caption: "Wedding guest, sorted", handle: "@rae.s" },
  { caption: "My heirloom in the making", handle: "@clementine.h" },
  { caption: "Stack the spheres", handle: "@yara.d" },
  { caption: "First gold, always", handle: "@simone.v" },
];

export default function UgcReel() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-reel-card]");
    const step = card ? card.getBoundingClientRect().width + 20 : 280;
    el.scrollBy({ left: dir * step * 1.2, behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-6 reveal">
          <SectionHeader
            eyebrow="@velmora · Community"
            title="Worn, in the wild"
            sub="Real moments from the people who wear our pieces every day."
            align="left"
          />
          <div className="hidden md:flex items-center gap-2 pb-2">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 flex items-center justify-center border border-hairline text-ink hover:bg-ink hover:text-bone hover:border-ink transition-colors"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 flex items-center justify-center border border-hairline text-ink hover:bg-ink hover:text-bone hover:border-ink transition-colors"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="
            mt-12 md:mt-16 -mx-5 md:mx-0 px-5 md:px-0
            flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2
          "
        >
          {REELS.map((reel, i) => (
            <article
              key={i}
              data-reel-card
              className="flex-shrink-0 w-[58%] sm:w-[34%] md:w-[260px] aspect-[9/16] relative overflow-hidden bg-ink snap-start reveal"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <UgcCardArt variant={i} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/85" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-bone">
                <p className="font-serif italic text-lg leading-tight">
                  "{reel.caption}"
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-wide-3 text-bone/70">
                  {reel.handle}
                </p>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-bone/15 backdrop-blur-sm flex items-center justify-center text-bone/80">
                <span className="text-[9px] tracking-wide-2">REEL</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
