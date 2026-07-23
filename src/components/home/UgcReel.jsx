import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StrkImg from "@/components/ui/StrkImg";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const REELS = [
  {
    id: "reel-1",
    caption: "Golden hour, every hour",
    query: "close up of gold huggie earrings worn on ear, warm natural light, editorial jewelry on model",
  },
  {
    id: "reel-2",
    caption: "Layered to perfection",
    query: "delicate gold necklaces layered on neck close up, soft editorial fashion photography",
  },
  {
    id: "reel-3",
    caption: "The everyday cuff",
    query: "gold ear cuff worn on ear, minimal editorial jewelry photography, warm tones",
  },
  {
    id: "reel-4",
    caption: "A little color story",
    query: "multicolor crystal necklace worn close up on collarbone, elegant editorial photography",
  },
  {
    id: "reel-5",
    caption: "Heirloom in the making",
    query: "gold filigree drop earrings worn, side profile close up, warm luxury jewelry photography",
  },
  {
    id: "reel-6",
    caption: "Gifted & adored",
    query: "hands opening velvet jewelry gift box with gold set, warm elegant photography",
  },
];

export default function UgcReel() {
  const scroller = useRef(null);

  const scrollBy = (dir) => {
    const node = scroller.current;
    if (!node) return;
    const amount = node.clientWidth * 0.7 * dir;
    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="border-y border-line bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="As Worn By You"
            title="The Velmora Reel"
            sub="Real moments, real shine — tag @velmora to be featured."
          />
          <div className="hidden shrink-0 gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="flex h-11 w-11 items-center justify-center border border-espresso/20 text-espresso transition-colors duration-300 hover:bg-espresso hover:text-ivory"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="flex h-11 w-11 items-center justify-center border border-espresso/20 text-espresso transition-colors duration-300 hover:bg-espresso hover:text-ivory"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <Reveal className="mt-10">
        <div
          ref={scroller}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:px-8 lg:px-12"
        >
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="group relative w-[200px] shrink-0 snap-start overflow-hidden sm:w-[230px]"
            >
              <div className="aspect-[9/16] w-full">
                <StrkImg
                  imgId={`${reel.id}-img`}
                  query={reel.query}
                  ratio="9x16"
                  width={480}
                  alt={reel.caption}
                  className="transition-transform duration-700 ease-luxe group-hover:scale-[1.05]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display text-lg italic leading-snug text-ivory">
                  {reel.caption}
                </p>
                <span className="mt-1 block font-body text-[10px] uppercase tracking-widest2 text-ivory/70">
                  @velmora
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
