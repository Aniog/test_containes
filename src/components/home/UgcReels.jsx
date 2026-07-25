import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const REELS = [
  {
    id: "aurora",
    caption: "Golden hour, golden ears",
    desc: "Close-up of a woman wearing sculptural gold earrings, warm evening light",
    tag: "@lena.wears",
  },
  {
    id: "layers",
    caption: "Layers that speak softly",
    desc: "Layered gold necklaces on a linen dress neckline, editorial style",
    tag: "@maison.mira",
  },
  {
    id: "hug",
    caption: "The everyday hug",
    desc: "Chunky gold huggie earrings on model, minimal neutral styling",
    tag: "@sofia.tells",
  },
  {
    id: "stack",
    caption: "Stacked with intention",
    desc: "Ear stack of gold huggies and ear cuff, warm studio portrait",
    tag: "@aria.gilded",
  },
  {
    id: "heirloom",
    caption: "Borrowed, then kept",
    desc: "Gold pendant necklace worn with an open collar shirt, soft daylight",
    tag: "@jules.marrow",
  },
  {
    id: "vow",
    caption: "A quiet kind of vow",
    desc: "Gold drop earrings catching light, dark elegant backdrop portrait",
    tag: "@noor.and.co",
  },
];

export default function UgcReels() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollBy({ left: dir * node.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <section className="border-y border-sand bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              As Worn By You
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium text-ink md:text-5xl">
              #Velmora <em className="italic">in the wild</em>
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sand text-espresso transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-sand text-espresso transition-colors hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div
          ref={scrollerRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:mt-14 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="group relative aspect-[9/16] w-[62vw] shrink-0 snap-start overflow-hidden sm:w-[240px] md:w-[260px]"
            >
              <img
                data-strk-img-id={`reel-${reel.id}-4d7e1a`}
                data-strk-img={`[reel-${reel.id}-cap] [reel-${reel.id}-desc]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="520"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.desc}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/20" />
              <span
                id={`reel-${reel.id}-desc`}
                className="hidden"
                aria-hidden="true"
              >
                {reel.desc}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p
                  id={`reel-${reel.id}-cap`}
                  className="font-serif text-xl italic leading-snug text-cream"
                >
                  {reel.caption}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-cream/70">
                  {reel.tag}
                </p>
              </figcaption>
              <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 backdrop-blur transition-colors group-hover:bg-gold">
                <span className="ml-0.5 border-y-[5px] border-l-[8px] border-y-transparent border-l-cream" />
              </span>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
