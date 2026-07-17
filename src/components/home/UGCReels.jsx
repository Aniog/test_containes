import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StrkImage, { useStrkImageLoader } from "@/components/ui/StrkImage";
import { UGC_REELS } from "@/data/products";

export default function UGCReels() {
  const ref = useStrkImageLoader([UGC_REELS.length]);
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.7;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      aria-labelledby="ugc-title"
      className="bg-cream-soft py-20 md:py-24 border-y border-line"
    >
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Worn by You</p>
            <h2
              id="ugc-title"
              className="mt-3 font-display text-4xl md:text-5xl leading-tight"
            >
              From the <em className="text-gold">ritual</em>
            </h2>
            <p className="mt-3 max-w-md text-sm text-ink-soft">
              Styled, layered, and lived in — see how our community wears Velmora.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-10 w-10 items-center justify-center border border-ink/20 text-ink hover:bg-ink hover:text-ivory transition-colors"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="inline-flex h-10 w-10 items-center justify-center border border-ink/20 text-ink hover:bg-ink hover:text-ivory transition-colors"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <ul
          ref={scrollerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 md:gap-6 overflow-x-auto px-5 md:px-10 pb-2"
          style={{ scrollPaddingLeft: "1.25rem" }}
        >
          {UGC_REELS.map((reel) => (
            <li
              key={reel.id}
              className="relative shrink-0 snap-start w-[58vw] sm:w-[230px] md:w-[260px] aspect-[9/16] overflow-hidden bg-cream-warm"
            >
              <StrkImage
                imgId={`ugc-${reel.id}`}
                query={`[ugc-caption-${reel.id}] [ugc-product-${reel.id}] [ugc-title]`}
                ratio="9x16"
                width={600}
                alt={reel.caption}
                className="absolute inset-0 h-full w-full"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(15,11,7,0) 55%, rgba(15,11,7,0.78) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-ivory">
                <p
                  id={`ugc-caption-${reel.id}`}
                  className="font-display text-xl leading-tight"
                >
                  {reel.caption}
                </p>
                <p
                  id={`ugc-product-${reel.id}`}
                  className="mt-1 text-[10px] tracking-eyebrow uppercase text-ivory/70"
                >
                  Featuring {reel.product}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
