import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { UGC_REELS } from "@/data/products";

export default function UGCReel() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild
      ? el.firstChild.getBoundingClientRect().width + 16
      : 240;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-velmora mb-10 md:mb-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Worn By You</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.05] text-ink max-w-xl">
              Styled by the
              <span className="italic"> Velmora community.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="w-10 h-10 border border-ink text-ink hover:bg-ink hover:text-bone transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="w-10 h-10 border border-ink text-ink hover:bg-ink hover:text-bone transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-4 overflow-x-auto px-6 md:px-10 lg:px-16 snap-x snap-mandatory pb-4"
      >
        {UGC_REELS.map((reel) => (
          <article
            key={reel.id}
            className="snap-start relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden bg-ink group cursor-pointer"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-soft-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/85" />
            <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-bone/90 backdrop-blur flex items-center justify-center text-ink">
              <Play className="w-3.5 h-3.5 fill-ink" strokeWidth={1.2} />
            </div>
            <div className="absolute inset-x-4 bottom-4 text-bone">
              <p className="font-serif italic text-base md:text-lg font-light leading-tight">
                {reel.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}