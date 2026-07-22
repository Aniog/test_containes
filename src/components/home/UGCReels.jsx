import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const REELS = [
  {
    id: "r1",
    caption: "Stacked everyday",
    handle: "@velmora",
    img: "woman ear stack gold huggies editorial portrait",
  },
  {
    id: "r2",
    caption: "The ear cuff moment",
    handle: "@noor.s",
    img: "model wearing gold ear cuff ear close up editorial",
  },
  {
    id: "r3",
    caption: "Heirloom gift unboxing",
    handle: "@amelia.r",
    img: "gift box jewelry unboxing ivory ribbon gold editorial",
  },
  {
    id: "r4",
    caption: "Wedding guest ready",
    handle: "@velmora",
    img: "woman wearing gold crystal necklace portrait warm light",
  },
  {
    id: "r5",
    caption: "The everyday huggie",
    handle: "@kira.m",
    img: "close up gold huggie hoop earring editorial portrait",
  },
  {
    id: "r6",
    caption: "Flora on a Sunday",
    handle: "@isla.t",
    img: "model wearing multicolor floral crystal necklace editorial portrait",
  },
  {
    id: "r7",
    caption: "Layered, never loud",
    handle: "@velmora",
    img: "woman gold necklaces layered editorial portrait warm",
  },
];

export default function UGCReels() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section className="bg-espresso py-20 md:py-32 text-bone">
      <div className="container-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="eyebrow-light text-champagne">As Worn By You</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-3 text-bone">
              The Reel
            </h2>
            <p className="mt-4 text-bone-soft text-base md:text-lg max-w-md leading-relaxed">
              Real people, real light. Tag{" "}
              <span className="text-champagne">@velmora</span> for a chance to be featured.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-11 h-11 border border-bone/30 text-bone hover:border-champagne hover:text-champagne transition-colors duration-300 flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.25} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-11 h-11 border border-bone/30 text-bone hover:border-champagne hover:text-champagne transition-colors duration-300 flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll track — full-bleed to allow edge-to-edge feel */}
      <div
        ref={scrollRef}
        className="no-scrollbar overflow-x-auto scroll-smooth pl-6 md:pl-10 lg:pl-14 pr-6 md:pr-10 lg:pr-14"
      >
        <div className="flex gap-4 md:gap-6">
          {REELS.map((r, i) => (
            <ReelCard key={r.id} reel={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReelCard({ reel, index }) {
  return (
    <article className="flex-shrink-0 w-[60vw] sm:w-[260px] md:w-[280px] aspect-[9/16] relative group cursor-pointer overflow-hidden">
      <div
        className="absolute inset-0 bg-cocoa"
        data-strk-bg-id={`reel-${reel.id}`}
        data-strk-bg={reel.img}
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="600"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/0 to-espresso/0" />

      {/* Play indicator (top right) */}
      <div className="absolute top-4 right-4 w-8 h-8 border border-bone/40 rounded-full flex items-center justify-center text-bone group-hover:border-champagne group-hover:text-champagne transition-colors duration-300">
        <Play className="w-3 h-3 fill-current" strokeWidth={0} />
      </div>

      {/* Handle badge (top left) */}
      <span className="absolute top-4 left-4 text-[9px] tracking-wider-3 uppercase text-bone/90 px-2 py-1 bg-espresso/40 backdrop-blur-sm">
        {reel.handle}
      </span>

      {/* Caption (bottom) */}
      <div className="absolute bottom-0 inset-x-0 p-5">
        <p className="font-display text-2xl text-bone leading-tight">
          {reel.caption}
        </p>
      </div>
    </article>
  );
}
