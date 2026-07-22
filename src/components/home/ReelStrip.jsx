import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { REELS } from "@/data/products";
import { useStrkImage } from "@/hooks/useStrkImage";
import { cn } from "@/lib/utils";
import StockImage from "@/components/ui/StockImage";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";

function ReelCard({ reel, idBase }) {
  return (
    <article
      className="relative flex-shrink-0 w-[64vw] sm:w-[260px] md:w-[280px] aspect-[9/16] overflow-hidden bg-espresso group"
    >
      <StockImage
        id={`${idBase}-${reel.id}`}
        query={reel.imageQuery}
        alt={reel.caption}
        ratio="9x16"
        width={500}
        className="w-full h-full"
      />
      {/* Bottom gradient + caption */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-cream">
        <p className="font-serif italic text-lg md:text-xl font-light leading-snug">
          &ldquo;{reel.caption}&rdquo;
        </p>
        <p className="mt-2 text-[10px] uppercase tracking-eyebrow text-champagne-soft">
          {reel.credit}
        </p>
      </div>
    </article>
  );
}

export default function ReelStrip() {
  const ref = useRef(null);
  const stripRef = useRef(null);
  useStrkImage(ref, []);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = stripRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = stripRef.current;
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
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section ref={ref} className="bg-espresso py-20 md:py-28 lg:py-32 text-cream">
      <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <Eyebrow className="text-champagne-soft">Worn By You</Eyebrow>
            <SectionTitle className="mt-3 text-cream">
              On the ear, on the neck
            </SectionTitle>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canLeft}
              aria-label="Scroll reels left"
              className={cn(
                "h-11 w-11 flex items-center justify-center border border-cream/30 text-cream transition-all duration-500 ease-elegant",
                canLeft
                  ? "hover:bg-cream hover:text-espresso"
                  : "opacity-30 cursor-not-allowed",
              )}
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canRight}
              aria-label="Scroll reels right"
              className={cn(
                "h-11 w-11 flex items-center justify-center border border-cream/30 text-cream transition-all duration-500 ease-elegant",
                canRight
                  ? "hover:bg-cream hover:text-espresso"
                  : "opacity-30 cursor-not-allowed",
              )}
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </div>

      {/* Strip — bleeds off the right edge on mobile for the editorial feel */}
      <div
        ref={stripRef}
        className="reel-scroll flex gap-4 md:gap-5 overflow-x-auto px-5 md:px-8 lg:px-12 pb-4 snap-x snap-mandatory"
      >
        {REELS.map((r) => (
          <div key={r.id} className="snap-start">
            <ReelCard reel={r} idBase="reel" />
          </div>
        ))}
      </div>
    </section>
  );
}
