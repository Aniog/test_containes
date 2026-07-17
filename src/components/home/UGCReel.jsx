import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ugcReels } from "@/data/products";
import StrkImage from "@/components/ui/StrkImage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function UGCReel() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const node = scrollerRef.current;
    if (!node) return;
    const card = node.querySelector("[data-reel-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 280;
    node.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="ugc-heading"
      className="bg-ivory py-20 md:py-28"
    >
      <StrkImage>
        <div className="container-content">
          <ScrollReveal>
            <div className="flex flex-col items-start gap-4 pb-8 md:flex-row md:items-end md:justify-between md:pb-12">
              <div>
                <p className="eyebrow">Worn by You</p>
                <h2
                  id="ugc-heading"
                  className="mt-3 font-serif text-4xl text-ink md:text-5xl"
                >
                  The Velmora Way
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
                  Real outfits, real light, real gold. Tag #velmora for a chance to be featured.
                </p>
              </div>
              <div className="hidden items-center gap-2 md:flex">
                <button
                  type="button"
                  aria-label="Scroll reels left"
                  onClick={() => scrollBy(-1)}
                  className="grid h-10 w-10 place-items-center border border-hairline text-ink transition-colors hover:border-gold hover:text-gold-deep"
                >
                  <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  aria-label="Scroll reels right"
                  onClick={() => scrollBy(1)}
                  className="grid h-10 w-10 place-items-center border border-hairline text-ink transition-colors hover:border-gold hover:text-gold-deep"
                >
                  <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:gap-5 md:px-10 lg:px-16"
          style={{ scrollPaddingLeft: "1.25rem" }}
        >
          {/* Left padding spacer to align first card with container */}
          <div aria-hidden="true" className="hidden shrink-0 md:block md:w-[max(0px,calc((100vw-1440px)/2))]" />
          {ugcReels.map((reel) => {
            const captionId = `${reel.id}-caption`;
            const handleId = `${reel.id}-handle`;
            return (
              <article
                key={reel.id}
                data-reel-card
                className="relative aspect-[9/16] w-[68vw] max-w-[260px] shrink-0 snap-start overflow-hidden bg-bone md:w-[220px] lg:w-[240px]"
              >
                <img
                  data-strk-img-id={reel.id}
                  data-strk-img={`[${captionId}] [${handleId}] gold jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={reel.caption}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-deep/65" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-ivory">
                  <p
                    id={captionId}
                    className="font-serif text-xl leading-tight"
                  >
                    {reel.caption}
                  </p>
                  <p
                    id={handleId}
                    className="mt-1.5 text-[0.6875rem] uppercase tracking-[0.22em] text-ivory/75"
                  >
                    {reel.handle}
                  </p>
                </div>
              </article>
            );
          })}
          <div aria-hidden="true" className="hidden shrink-0 md:block md:w-[max(0px,calc((100vw-1440px)/2))]" />
        </div>
      </StrkImage>
    </section>
  );
}

export default UGCReel;
