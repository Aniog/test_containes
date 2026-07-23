import React, { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// Each card is a 9:16 vertical, with a soft serif caption overlay — modeled
// after an Instagram Reels strip. We use stock images via data-strk-img
// for editorial warm-lit close-ups of women wearing gold jewelry.

const reels = [
  {
    id: "ugc-amber",
    imgId: "ugc-amber-a1f2e3",
    query: "model wearing gold drop earrings editorial",
    caption: "The drop that finishes the look.",
    handle: "@isabel.km",
  },
  {
    id: "ugc-flora",
    imgId: "ugc-flora-b2c3d4",
    query: "model wearing floral crystal gold necklace",
    caption: "A garden at the collarbone.",
    handle: "@maya.lenoir",
  },
  {
    id: "ugc-huggies",
    imgId: "ugc-huggies-c3d4e5",
    query: "close up gold huggie earrings on ear",
    caption: "Everyday, considered.",
    handle: "@noor.aria",
  },
  {
    id: "ugc-cuff",
    imgId: "ugc-cuff-d4e5f6",
    query: "gold ear cuff crystal editorial portrait",
    caption: "One ear, one cuff.",
    handle: "@selene.j",
  },
  {
    id: "ugc-set",
    imgId: "ugc-set-e5f6a7",
    query: "model wearing matching gold jewelry set",
    caption: "The pair to give — and keep.",
    handle: "@maren.k",
  },
  {
    id: "ugc-pendant",
    imgId: "ugc-pendant-f6a7b8",
    query: "delicate gold crystal pendant portrait",
    caption: "A whisper of gold.",
    handle: "@june.elena",
  },
  {
    id: "ugc-stack",
    imgId: "ugc-stack-a7b8c9",
    query: "layered gold necklaces editorial",
    caption: "Layered, never loud.",
    handle: "@ana.lviv",
  },
];

export default function UGCReel() {
  const scrollerRef = useRef(null);
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-reel-card]");
    if (!card) return;
    const amount = card.getBoundingClientRect().width + 16; // gap
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-reel-card]");
    if (!card) return;
    const w = card.getBoundingClientRect().width + 16;
    setActiveIdx(Math.round(el.scrollLeft / w));
  };

  return (
    <section
      ref={containerRef}
      id="ugc-reel"
      className="bg-cocoa-900 text-cream-50 py-20 md:py-28"
    >
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="eyebrow-light text-gold-300 mb-3">
              Worn by you · #VelmoraOnYou
            </p>
            <h2
              id="ugc-title"
              className="font-serif font-light text-cream-50 text-[36px] md:text-[56px] leading-[1.02]"
            >
              The <span className="italic text-gold-300">Velmora</span> way
            </h2>
            <p
              id="ugc-subtitle"
              className="mt-4 text-cream-100/80 text-base md:text-lg max-w-md font-light"
            >
              Quietly considered pieces, lived in daily. Tag us to be featured.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="w-10 h-10 inline-flex items-center justify-center border border-cream-200/40 text-cream-50 hover:border-gold-500 hover:text-gold-500 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="w-10 h-10 inline-flex items-center justify-center border border-cream-200/40 text-cream-50 hover:border-gold-500 hover:text-gold-500 transition-colors"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge horizontal scroller */}
      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth pl-5 md:pl-[max(20px,calc((100vw-1440px)/2+32px))] pr-5 md:pr-[max(20px,calc((100vw-1440px)/2+32px))]"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {reels.map((reel, i) => (
          <article
            key={reel.id}
            data-reel-card
            className="relative shrink-0 w-[220px] sm:w-[240px] md:w-[260px] aspect-[9/16] overflow-hidden bg-cocoa-800 group"
            style={{ scrollSnapAlign: "start" }}
          >
            <img
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-[1.04]"
              data-strk-img-id={reel.imgId}
              data-strk-img={reel.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="520"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/90 via-cocoa-900/10 to-transparent" />

            {/* Play cue (top right) */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream-50/15 backdrop-blur-sm flex items-center justify-center text-cream-50">
              <Play className="w-3.5 h-3.5" strokeWidth={1.5} fill="currentColor" />
            </div>

            {/* Caption (bottom) */}
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
              <p className="font-serif italic text-[20px] md:text-[22px] leading-snug text-cream-50">
                {reel.caption}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-btn text-cream-200/80">
                {reel.handle}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Progress dots (mobile) */}
      <div className="container-editorial mt-8 md:hidden">
        <div className="flex items-center gap-1.5">
          {reels.map((_, i) => (
            <span
              key={i}
              className={`h-px transition-all duration-500 ${
                i === activeIdx ? "w-8 bg-gold-500" : "w-4 bg-cream-200/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
