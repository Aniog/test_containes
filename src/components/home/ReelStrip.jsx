import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { UGC_REELS } from "@/data/ugc.js";
import { useStrkImages } from "@/lib/imageLoader.js";

/**
 * Reel-style UGC strip. Each card is a 9:16 portrait with a soft serif
 * caption overlay and a play-button mark to mimic an Instagram Reels strip.
 * Horizontal scroll on mobile/tablet; arrows on desktop.
 */
export default function ReelStrip() {
  const ref = useRef(null);
  const scrollerRef = useRef(null);
  useStrkImages(ref);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.getBoundingClientRect().width || 240;
    el.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div className="flex flex-col items-start gap-3">
            <span className="eyebrow">Worn by you</span>
            <h2 className="font-serif font-light text-3xl md:text-5xl text-ink leading-[1.1] max-w-xl">
              See how our community wears Velmora.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canLeft}
              className="p-2 border border-line text-ink hover:border-ink hover:text-gold disabled:opacity-30 disabled:hover:text-ink disabled:hover:border-line transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft strokeWidth={1.5} className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canRight}
              className="p-2 border border-line text-ink hover:border-ink hover:text-gold disabled:opacity-30 disabled:hover:text-ink disabled:hover:border-line transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight strokeWidth={1.5} className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-5 px-5 md:mx-0 md:px-0"
        >
          {UGC_REELS.map((reel, i) => (
            <article
              key={reel.id}
              className="snap-start flex-shrink-0 w-[60vw] sm:w-[260px] md:w-[240px] aspect-[9/16] relative overflow-hidden bg-surface-warm group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={`reel-${i + 1}-img`}
                data-strk-img={reel.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                loading="lazy"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-overlay/80 pointer-events-none" />
              <span
                aria-hidden="true"
                className="absolute top-4 right-4 inline-flex items-center justify-center w-8 h-8 rounded-full border border-cream/60 text-cream/80 backdrop-blur-sm"
              >
                <Play strokeWidth={1.5} className="w-3.5 h-3.5 fill-current" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                <p className="font-serif text-xl leading-snug font-light">
                  {reel.caption}
                </p>
                <p className="mt-1 font-sans text-[11px] tracking-[0.2em] uppercase text-cream/70">
                  {reel.handle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
