import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ugcReel } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import Container from "@/components/layout/Container";

export default function UGCReel() {
  const ref = useReveal();
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-ugc-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 240;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="bg-espresso py-20 md:py-28" ref={ref}>
      <Container size="wide">
        <div className="reveal flex items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="text-label text-champagne">From Our Community</p>
            <h2 className="font-serif text-4xl md:text-6xl text-bone mt-3 leading-tight">
              #WornWithVelmora
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 inline-flex items-center justify-center border border-bone/30 text-bone hover:bg-bone/10 transition-colors"
            >
              <ChevronLeft strokeWidth={1.25} className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 inline-flex items-center justify-center border border-bone/30 text-bone hover:bg-bone/10 transition-colors"
            >
              <ChevronRight strokeWidth={1.25} className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>

      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        <div className="reveal flex gap-4 px-5 md:px-10 pb-4">
          {ugcReel.map((card) => (
            <article
              key={card.id}
              data-ugc-card
              className="snap-start shrink-0 w-[200px] sm:w-[230px] md:w-[260px] aspect-[9/16] relative overflow-hidden bg-espresso-soft group"
            >
              <img
                src={card.image}
                alt={card.caption}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/80" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-bone">
                <p className="text-label text-champagne">{card.handle}</p>
                <p className="font-serif text-lg leading-snug mt-2 italic">
                  {card.caption}
                </p>
              </div>
            </article>
          ))}
          {/* Trailing spacer for snap padding */}
          <div className="shrink-0 w-2 md:w-6" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}