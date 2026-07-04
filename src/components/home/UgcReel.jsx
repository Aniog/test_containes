import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import { ugcCards } from "@/data/products.js";

const UgcReel = () => {
  const scrollerRef = useRef(null);

  const scrollBy = (dx) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-ink text-cream">
      <Container>
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="eyebrow text-champagne">Worn by you</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
              <span className="italic font-light">In </span>the moment
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-340)}
              className="h-10 w-10 inline-flex items-center justify-center border border-cream/20 rounded-sm hover:border-champagne hover:text-champagne"
              aria-label="Scroll reels left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(340)}
              className="h-10 w-10 inline-flex items-center justify-center border border-cream/20 rounded-sm hover:border-champagne hover:text-champagne"
              aria-label="Scroll reels right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>

      {/* Horizontal scroller — full bleed */}
      <div
        ref={scrollerRef}
        className="overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-4 sm:gap-5 px-5 sm:px-8 lg:px-14 pb-2 pt-1 w-max">
          {ugcCards.map((card) => (
            <article
              key={card.id}
              className="relative w-[220px] sm:w-[260px] aspect-[9/16] flex-shrink-0 rounded-sm overflow-hidden group"
            >
              <div className="absolute inset-0">{card.illo}</div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/80" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="eyebrow text-champagne/90">{card.tone}</p>
                <p className="mt-2 font-serif text-xl text-cream leading-snug">
                  <span className="italic font-light">{card.caption}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UgcReel;
