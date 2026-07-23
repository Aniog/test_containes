import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PLACEHOLDER_IMG } from "@/data/products";
import Reveal from "@/components/ui/Reveal";

const REELS = [
  { id: "reel-ear-stack", caption: "The everyday ear stack", handle: "@maja.wears" },
  { id: "reel-layered", caption: "Layered, never loud", handle: "@softly.styled" },
  { id: "reel-golden-hour", caption: "Golden hour, always", handle: "@elanore" },
  { id: "reel-weekend", caption: "Weekend uniform", handle: "@petite.joie" },
  { id: "reel-heirloom", caption: "Heirlooms in the making", handle: "@theslowmornings" },
  { id: "reel-worn-daily", caption: "Worn daily since 2021", handle: "@cafe.et.creme" },
];

export default function UgcReels() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              #MyVelmora
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium text-espresso md:text-5xl">
              As Worn By You
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/20 text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/20 text-espresso transition-all duration-300 hover:border-espresso hover:bg-espresso hover:text-cream"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div
          ref={scrollerRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:mt-12 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="group relative aspect-[9/16] w-56 shrink-0 snap-start overflow-hidden bg-espresso md:w-64"
            >
              <img
                src={PLACEHOLDER_IMG}
                alt={reel.caption}
                loading="lazy"
                data-strk-img-id={`${reel.id}-img`}
                data-strk-img={`[${reel.id}-caption] woman wearing delicate gold jewelry close-up ear neck warm light vertical`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-cream">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p
                  id={`${reel.id}-caption`}
                  className="font-display text-lg font-medium italic leading-snug text-cream"
                >
                  “{reel.caption}”
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/70">
                  {reel.handle}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
