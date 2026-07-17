import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { REELS } from "@/data/products";
import { StrkImg } from "@/components/ui/strk-img";

export function ReelsRow() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="border-y border-line bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-luxe text-bronze">
              @velmora.jewelry
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light text-espresso md:text-5xl">
              Worn by You
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center border border-espresso/30 text-espresso transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center border border-espresso/30 text-espresso transition-all duration-300 hover:border-bronze hover:bg-bronze hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="reveal no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:px-10 lg:px-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))]"
      >
        {REELS.map((reel, i) => (
          <figure
            key={reel.id}
            className="group relative w-[62vw] max-w-[240px] shrink-0 snap-start overflow-hidden bg-espresso sm:w-[240px] md:max-w-none lg:w-[calc((100%-5*1rem)/6)]"
          >
            <div className="aspect-[9/16]">
              <StrkImg
                imgId={`${reel.id}-img`}
                query={`close-up of a woman wearing gold jewelry, [${reel.id}-caption]`}
                ratio="9x16"
                width="500"
                alt={reel.caption}
                loading={i < 4 ? "eager" : "lazy"}
                className="transition-transform duration-700 ease-luxe group-hover:scale-[1.06]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/20" />
            <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/50 bg-espresso/20 text-cream backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-bronze group-hover:bg-bronze/80">
              <Play className="ml-0.5 h-4 w-4 fill-current" />
            </span>
            <figcaption
              id={`${reel.id}-caption`}
              className="absolute inset-x-0 bottom-0 p-5 font-serif text-lg font-light italic leading-snug text-cream"
            >
              “{reel.caption}”
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
