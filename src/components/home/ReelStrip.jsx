import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const reels = [
  { id: "reel-1", caption: "Everyday gold", query: "gold huggie earrings ear stack" },
  { id: "reel-2", caption: "Layered finesse", query: "layered gold necklaces editorial" },
  { id: "reel-3", caption: "Gift-ready sets", query: "gold jewelry gift box velvet" },
  { id: "reel-4", caption: "Soft light, bold glow", query: "gold earrings warm light closeup" },
  { id: "reel-5", caption: "Made to mix", query: "mixed gold jewelry flatlay" },
  { id: "reel-6", caption: "Evening minimal", query: "gold drop earrings evening" },
];

export default function ReelStrip() {
  const scrollRef = useRef(null);
  const { ref, isVisible } = useScrollReveal();

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -280 : 280;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      ref={(node) => {
        ref.current = node;
      }}
      className="bg-brand-cream py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          className={cn(
            "mb-8 flex items-end justify-between",
            isVisible && "animate-fadeUp"
          )}
        >
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-brand-rose-dark">
              @velmorafinejewelry
            </p>
            <h2 className="mt-3 font-serif text-4xl text-brand-charcoal md:text-5xl">
              On the Gram
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center border border-brand-charcoal/10 bg-brand-ivory text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-brand-ivory"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center border border-brand-charcoal/10 bg-brand-ivory text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-brand-ivory"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className={cn(
          "flex gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide lg:gap-6 lg:px-10",
          isVisible && "animate-fadeUp"
        )}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          animationDelay: isVisible ? "0.15s" : "0s",
        }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="group relative w-[180px] flex-shrink-0 overflow-hidden bg-brand-charcoal md:w-[220px]"
            style={{ aspectRatio: "9/16" }}
          >
            <img
              data-strk-img-id={reel.id}
              data-strk-img={`[${reel.id}-caption] ${reel.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-warm-black/70 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-ivory/90 text-brand-charcoal">
                <Play className="h-5 w-5 fill-current" />
              </div>
            </div>
            <p
              id={`${reel.id}-caption`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg italic leading-tight text-brand-ivory"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
