import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const REELS = [
  {
    id: "reel-golden-hour",
    caption: "Golden hour, golden ears",
    handle: "@amelia.wears",
    imgId: "reel-img-golden-hour-f1",
    captionId: "reel-cap-golden-hour",
  },
  {
    id: "reel-layered-neck",
    caption: "Layers that speak softly",
    handle: "@sofia.styles",
    imgId: "reel-img-layered-neck-f2",
    captionId: "reel-cap-layered-neck",
  },
  {
    id: "reel-everyday-huggies",
    caption: "The everyday huggie",
    handle: "@noor.adorned",
    imgId: "reel-img-everyday-huggies-f3",
    captionId: "reel-cap-everyday-huggies",
  },
  {
    id: "reel-heirloom-moments",
    caption: "Heirloom moments",
    handle: "@grace.in.gold",
    imgId: "reel-img-heirloom-f4",
    captionId: "reel-cap-heirloom-moments",
  },
  {
    id: "reel-quiet-luxury",
    caption: "Quiet luxury, daily",
    handle: "@lena.muse",
    imgId: "reel-img-quiet-luxury-f5",
    captionId: "reel-cap-quiet-luxury",
  },
  {
    id: "reel-sunday-silk",
    caption: "Sunday silk & gold",
    handle: "@ivy.treasures",
    imgId: "reel-img-sunday-silk-f6",
    captionId: "reel-cap-sunday-silk",
  },
];

export default function UgcReels() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-8 flex items-end justify-between md:mb-12">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">
              #VelmoraOnYou
            </p>
            <h2
              id="reels-title"
              className="mt-3 font-serif text-3xl font-light text-ink md:text-5xl"
            >
              Worn &amp; Loved
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll reels left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/30 text-espresso transition-all duration-300 hover:border-gold hover:text-gold-deep"
            >
              <ChevronLeft size={17} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll reels right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/30 text-espresso transition-all duration-300 hover:border-gold hover:text-gold-deep"
            >
              <ChevronRight size={17} strokeWidth={1.5} />
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div
          ref={scrollerRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:gap-5 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
        >
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="group relative aspect-[9/16] w-[180px] shrink-0 snap-start overflow-hidden rounded-sm bg-ink shadow-[0_20px_45px_-25px_rgba(33,26,18,0.5)] md:w-[224px]"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.captionId}] gold jewelry worn on ear neck close-up, instagram reel style [reels-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/15" />
              <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/25 text-cream opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <Play size={16} strokeWidth={1.5} className="ml-0.5 fill-cream" />
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p
                  id={reel.captionId}
                  className="font-serif text-base italic leading-snug text-cream"
                >
                  “{reel.caption}”
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest2 text-cream/70">
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
