import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import StrkImage from "@/components/StrkImage";

const REELS = [
  {
    id: "reel-01",
    caption: "Golden hour, golden ears",
    handle: "@amelia.w",
    imgId: "reel-img-01-a1b2c3",
    query: "close-up of gold huggie earrings worn on a woman's ear, warm light, editorial",
  },
  {
    id: "reel-02",
    caption: "Layered and loved",
    handle: "@sofia.marie",
    imgId: "reel-img-02-d4e5f6",
    query: "delicate gold necklaces layered on a woman's neck, warm skin tones, editorial",
  },
  {
    id: "reel-03",
    caption: "Everyday heirloom",
    handle: "@grace.lin",
    imgId: "reel-img-03-g7h8i9",
    query: "woman adjusting gold ear cuff, soft warm portrait, dark background",
  },
  {
    id: "reel-04",
    caption: "The little dome hug",
    handle: "@noor.k",
    imgId: "reel-img-04-j0k1l2",
    query: "profile of a woman wearing chunky gold dome huggie earrings, warm editorial light",
  },
  {
    id: "reel-05",
    caption: "Unboxed with love",
    handle: "@elena.ros",
    imgId: "reel-img-05-m3n4o5",
    query: "hands opening a ribbon-tied jewelry gift box with gold jewelry, warm light",
  },
  {
    id: "reel-06",
    caption: "Caught in candlelight",
    handle: "@maya.b",
    imgId: "reel-img-06-p6q7r8",
    query: "gold filigree drop earrings glowing in candlelight, close-up, moody editorial",
  },
];

export default function ReelStrip() {
  const scrollerRef = useRef(null);

  const scrollBy = (direction) => {
    scrollerRef.current?.scrollBy({ left: direction * 280, behavior: "smooth" });
  };

  return (
    <section className="border-y border-noir-line bg-noir-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-luxe text-gold">
              <Instagram className="h-4 w-4" />
              @velmora.jewelry
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-cream md:text-5xl">
              Worn by <span className="italic text-gold-soft">You</span>
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-noir-line text-cream/80 transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-noir-line text-cream/80 transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="scrollbar-none mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:mt-14 md:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        {REELS.map((reel) => (
          <figure
            key={reel.id}
            className="group relative w-44 shrink-0 snap-start overflow-hidden rounded-sm border border-noir-line md:w-56"
          >
            <div className="aspect-[9/16] w-full">
              <StrkImage
                imgId={reel.imgId}
                query={`${reel.query} vertical 9:16`}
                ratio="9x16"
                width={500}
                alt={reel.caption}
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-serif text-base italic leading-snug text-cream md:text-lg">
                “{reel.caption}”
              </p>
              <p className="mt-1.5 text-[10px] font-medium uppercase tracking-widest text-gold">
                {reel.handle}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
