import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useStrkImages from "@/hooks/useStrkImages.js";

const reels = [
  { id: "reel-1", caption: "Everyday gold, elevated" },
  { id: "reel-2", caption: "Made for stacking" },
  { id: "reel-3", caption: "A little light, a lot of luxe" },
  { id: "reel-4", caption: "Gift-ready moments" },
  { id: "reel-5", caption: "Wear it everywhere" },
  { id: "reel-6", caption: "Details that dazzle" },
];

export default function ReelsSection() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  useStrkImages(sectionRef);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 240;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-cream-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <div>
            <p className="text-xs tracking-super-wide uppercase text-ink-muted mb-3">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">Styled by You</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-ink/15 hover:bg-ink hover:text-cream transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-ink/15 hover:bg-ink hover:text-cream transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative shrink-0 w-[180px] md:w-[220px] aspect-[9/16] snap-start overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={`reel-img-${reel.id}`}
              data-strk-img={`[reel-caption-${reel.id}] [reels-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width={400}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <p
              id={`reel-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg md:text-xl text-cream leading-tight"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>

      <h3 id="reels-title" className="sr-only">Velmora community style reel</h3>
    </section>
  );
}
