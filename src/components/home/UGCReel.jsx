import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ugcCards } from "@/data/products";

export default function UGCReel() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(".ugc-card");
    const step = card ? card.getBoundingClientRect().width + 16 : 280;
    el.scrollBy({ left: dir * step * 1.2, behavior: "smooth" });
  };

  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="container-editorial mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="eyebrow text-cream/55 mb-4">@velmora · Worn by you</div>
            <h2 className="font-serif text-4xl md:text-5xl text-cream leading-[1.1] text-balance">
              As worn, in the everyday.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="w-11 h-11 border border-cream/25 text-cream/80 hover:text-gold-400 hover:border-gold-400 transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="w-11 h-11 border border-cream/25 text-cream/80 hover:text-gold-400 hover:border-gold-400 transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="flex gap-4 px-5 sm:px-8 lg:px-12 pb-4">
          {ugcCards.map((card) => (
            <article
              key={card.id}
              className="ugc-card group"
              style={{ scrollSnapAlign: "start" }}
            >
              <img
                src={card.image}
                alt={card.caption}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-[1.03]"
                style={{ filter: "sepia(0.15) saturate(1.15) brightness(0.95) contrast(1.02)" }}
              />
              {/* warm bottom gradient for caption readability */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(14,11,7,0) 50%, rgba(14,11,7,0.65) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-serif italic text-cream text-lg sm:text-xl leading-snug text-balance">
                  {card.caption}
                </p>
                <div className="mt-2 text-[10px] uppercase tracking-widest2 text-cream/60">
                  @velmora
                </div>
              </div>
              {/* small reel indicator */}
              <div className="absolute top-3 right-3 px-2 py-1 bg-ink/60 text-cream text-[9px] uppercase tracking-widest2 backdrop-blur-sm">
                Reel
              </div>
            </article>
          ))}
          {/* trailing spacer */}
          <div className="flex-shrink-0 w-1" />
        </div>
      </div>
    </section>
  );
}
