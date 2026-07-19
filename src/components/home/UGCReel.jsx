import { useRef } from "react";
import { Play } from "lucide-react";
import { UGC_REEL } from "@/data/products";
import { useImageLoader } from "@/hooks/useImageLoader";

export default function UGCReel() {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  useImageLoader(containerRef, []);

  const scrollBy = (dir) => {
    if (!scrollerRef.current) return;
    const w = scrollerRef.current.clientWidth * 0.7;
    scrollerRef.current.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="bg-bone">
      <div className="mx-auto max-w-7.5xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-wider-3 text-gold-deep">
              From the Circle
            </p>
            <h2 className="mt-3 font-serif text-4xl text-espresso sm:text-5xl">
              Worn by you
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-10 w-10 items-center justify-center border border-line bg-ivory text-espresso transition-colors hover:border-espresso"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="inline-flex h-10 w-10 items-center justify-center border border-line bg-ivory text-espresso transition-colors hover:border-espresso"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 sm:-mx-10 sm:gap-6 sm:px-10"
        >
          {UGC_REEL.map((card, i) => (
            <figure
              key={card.id}
              className="relative aspect-[9/16] w-[68%] flex-shrink-0 snap-start overflow-hidden bg-espresso sm:w-[300px] lg:w-[320px]"
            >
              <img
                alt={card.caption}
                data-strk-img-id={`ugc-${card.id}`}
                data-strk-img={card.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width={600}
                loading="lazy"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent" />
              {/* Reel play badge */}
              <div className="absolute right-3 top-3 inline-flex items-center gap-1 bg-espresso/50 px-2 py-1 font-sans text-[10px] uppercase tracking-wider-2 text-ivory backdrop-blur-sm">
                <Play size={10} strokeWidth={1.5} fill="currentColor" />
                Reel
              </div>
              {/* Caption */}
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-serif text-xl text-ivory sm:text-2xl">
                  {card.caption}
                </p>
                <p className="mt-2 font-sans text-[10px] uppercase tracking-wider-2 text-ivory/75">
                  {card.handle}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
