import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductImage from "@/components/product/ProductImage";
import { cn } from "@/lib/utils";

// 6 vertical "reel" cards: warm jewelry on model — like an Instagram Reels strip.
const reels = [
  {
    id: "reel-1",
    title: "Golden hour",
    caption: "On the lobe, in the light.",
    imgId: "ugc-reel-1-img",
    titleId: "ugc-reel-1-title",
    captionId: "ugc-reel-1-caption",
  },
  {
    id: "reel-2",
    title: "Layered",
    caption: "Three chains, one moment.",
    imgId: "ugc-reel-2-img",
    titleId: "ugc-reel-2-title",
    captionId: "ugc-reel-2-caption",
  },
  {
    id: "reel-3",
    title: "The huggie ritual",
    caption: "Daily. Forever. Treasured.",
    imgId: "ugc-reel-3-img",
    titleId: "ugc-reel-3-title",
    captionId: "ugc-reel-3-caption",
  },
  {
    id: "reel-4",
    title: "Soft filigree",
    caption: "Whispers of vintage romance.",
    imgId: "ugc-reel-4-img",
    titleId: "ugc-reel-4-title",
    captionId: "ugc-reel-4-caption",
  },
  {
    id: "reel-5",
    title: "Gifting season",
    caption: "Wrapped in velvet, given with love.",
    imgId: "ugc-reel-5-img",
    titleId: "ugc-reel-5-title",
    captionId: "ugc-reel-5-caption",
  },
  {
    id: "reel-6",
    title: "Stacked studs",
    caption: "For the second piercing.",
    imgId: "ugc-reel-6-img",
    titleId: "ugc-reel-6-title",
    captionId: "ugc-reel-6-caption",
  },
];

export default function UGCReels() {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollerRef.current) return;
    const amount = scrollerRef.current.clientWidth * 0.7;
    scrollerRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-28 bg-ivoryLight">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-3">#WornWithVelmora</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              From the community
            </h2>
            <p className="mt-3 text-sm text-taupe max-w-md">
              Real moments, real jewelry — shared by the women who wear them.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-10 h-10 flex items-center justify-center border border-hairline hover:bg-espresso hover:text-ivory hover:border-espresso transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-10 h-10 flex items-center justify-center border border-hairline hover:bg-espresso hover:text-ivory hover:border-espresso transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Full-bleed scroller */}
      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
      >
        <ul className="flex gap-4 md:gap-5 px-6 md:px-10 lg:px-16 pb-4">
          {reels.map((reel) => (
            <li
              key={reel.id}
              className="relative shrink-0 w-[60vw] sm:w-[280px] md:w-[300px] aspect-[9/16] bg-espresso overflow-hidden group"
            >
              <ProductImage
                imgId={reel.imgId}
                query={`[${reel.captionId}] [${reel.titleId}] #WornWithVelmora From the community`}
                ratio="9x16"
                width={600}
                alt={reel.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-warmBlack/0 via-warmBlack/0 to-warmBlack/80" />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                <p
                  id={reel.titleId}
                  className="font-serif text-2xl md:text-3xl leading-tight"
                >
                  {reel.title}
                </p>
                <p
                  id={reel.captionId}
                  className="mt-1 text-[11px] uppercase tracking-widest2 text-ivory/75"
                >
                  {reel.caption}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
