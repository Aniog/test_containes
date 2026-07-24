import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ugcReels } from "@/data/site";
import { StockImage } from "@/components/ui/StockImage";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function ReelUGCRow() {
  const scrollerRef = useRef(null);
  const [containerEl, setContainerEl] = useState(null);

  useEffect(() => {
    if (!containerEl) return;
    return ImageHelper.loadImages(strkImgConfig, containerEl);
  }, [containerEl]);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section
      id="reel-section"
      className="bg-paper py-20 md:py-28 border-y border-hairline"
      ref={setContainerEl}
    >
      <Container>
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p id="reel-section-eyebrow" className="eyebrow">
              The Community
            </p>
            <h2
              id="reel-section-title"
              className="mt-3 font-serif text-3xl md:text-5xl text-ink font-light"
            >
              Worn by you.
            </h2>
            <p
              id="reel-section-subtitle"
              className="mt-3 text-[15px] text-taupe max-w-md"
            >
              Tag <span className="text-ink">@velmora</span> for a chance to be featured.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="h-10 w-10 inline-flex items-center justify-center border border-hairline text-ink hover:bg-ink hover:text-paper hover:border-ink transition-colors"
            >
              <ChevronLeft size={16} strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="h-10 w-10 inline-flex items-center justify-center border border-hairline text-ink hover:bg-ink hover:text-paper hover:border-ink transition-colors"
            >
              <ChevronRight size={16} strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </Container>

      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-4 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory"
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {ugcReels.map((reel) => (
          <article
            key={reel.id}
            className="snap-start shrink-0 w-[220px] md:w-[260px] group"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-cocoa">
              <StockImage
                id={reel.imgId}
                query={reel.query}
                ratio="9x16"
                width={520}
                alt={reel.caption}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-paper">
                <p
                  id={`${reel.id}-caption`}
                  className="font-serif text-lg leading-snug italic"
                >
                  {reel.caption}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-ui text-ivory/80">
                  {reel.handle}
                </p>
              </div>
            </div>
          </article>
        ))}
        {/* spacer so last reel isn't flush */}
        <div className="shrink-0 w-1" />
      </div>
    </section>
  );
}
