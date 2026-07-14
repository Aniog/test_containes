import { useRef } from "react";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { ugcReels } from "@/data/products";
import ImageFrame from "@/components/ui/ImageFrame";

export default function UGCReel() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="container-editorial">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <Instagram size={13} strokeWidth={1.5} className="text-gold-deep" />
              From the @velmora community
            </p>
            <h2
              id="ugc-title"
              className="mt-3 max-w-xl font-serif text-4xl leading-[1.05] text-charcoal md:text-5xl"
            >
              Worn slowly. Worn well.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="inline-flex h-10 w-10 items-center justify-center border border-mist text-charcoal transition-colors hover:border-charcoal"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="inline-flex h-10 w-10 items-center justify-center border border-mist text-charcoal transition-colors hover:border-charcoal"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-none mt-12 flex gap-4 overflow-x-auto px-6 pb-4 md:mt-16 md:gap-6 md:px-12 lg:px-[max(48px,calc((100vw-1280px)/2))]"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {ugcReels.map((reel, i) => {
          const captionId = `reel-${reel.id}-caption`;
          return (
            <article
              key={reel.id}
              className="relative flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative w-[220px] md:w-[260px]">
                <ImageFrame
                  id={`reel-${reel.id}-img`}
                  query={`[${captionId}] [ugc-title]`}
                  ratio="9x16"
                  width={400}
                  tone="dark"
                  alt={reel.caption}
                />
                {/* Soft serif caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent p-4">
                  <p
                    id={captionId}
                    className="font-serif text-lg italic leading-tight text-ivory"
                  >
                    {reel.caption}
                  </p>
                  <p className="mt-2 font-sans text-[10px] uppercase tracking-product text-ivory/70">
                    {reel.handle}
                  </p>
                </div>
                {/* Index pip (mimics reel UI) */}
                <span className="absolute right-3 top-3 inline-flex h-6 w-6 items-center justify-center bg-ivory/85 font-sans text-[10px] text-charcoal">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
