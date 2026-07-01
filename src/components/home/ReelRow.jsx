import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { productImage } from "@/lib/placeholder";
import { cn } from "@/lib/cn";

const reels = [
  { id: "r1", quote: "Worn daily, never taken off.", author: "Maya R." },
  { id: "r2", quote: "My new forever piece.", author: "Sienna L." },
  { id: "r3", quote: "Heirloom in the making.", author: "Camille B." },
  { id: "r4", quote: "Layers beautifully.", author: "Priya S." },
  { id: "r5", quote: "Soft, weightless, perfect.", author: "Jules D." },
  { id: "r6", quote: "Quiet luxury, exactly.", author: "Aria W." },
  { id: "r7", quote: "A gift to myself.", author: "Naomi F." },
];

const palettes = ["noir", "cocoa", "champagne", "noir", "cocoa", "champagne", "noir"];

export default function ReelRow() {
  const scrollerRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-reel-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 280;
    el.scrollBy({ left: dir * step * 1.5, behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-28 bg-espresso-200 text-ivory-50">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="text-[10px] sm:text-[11px] tracking-widest2 uppercase text-gold-300 mb-4">
              Worn by you · #velmora
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-ivory-50">
              From the studio, to the world
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              className={cn(
                "w-10 h-10 rounded-full border border-ivory-100/20 flex items-center justify-center text-ivory-100/80 transition-opacity",
                canPrev ? "hover:text-ivory-50 hover:border-ivory-50" : "opacity-30 cursor-not-allowed",
              )}
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              className={cn(
                "w-10 h-10 rounded-full border border-ivory-100/20 flex items-center justify-center text-ivory-100/80 transition-opacity",
                canNext ? "hover:text-ivory-50 hover:border-ivory-50" : "opacity-30 cursor-not-allowed",
              )}
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <ul className="flex gap-4 px-5 sm:px-8 lg:px-12 pb-2 pr-12">
          {reels.map((reel, i) => (
            <li
              key={reel.id}
              data-reel-card
              className="flex-shrink-0 w-[200px] sm:w-[240px] aspect-reel relative overflow-hidden bg-ivory-200 group"
              style={{ scrollSnapAlign: "start" }}
            >
              <img
                src={productImage({ scene: "reel", palette: palettes[i % palettes.length], w: 540, h: 960, variant: reel.quote })}
                alt={reel.quote}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 text-ivory-50">
                <p className="font-serif italic text-lg leading-snug drop-shadow-sm">
                  "{reel.quote}"
                </p>
                <p className="mt-2 text-[10px] tracking-widest2 uppercase text-ivory-100/80">
                  — {reel.author}
                </p>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-ivory-50/15 backdrop-blur-sm flex items-center justify-center text-ivory-50">
                <span className="text-[10px]">▶</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
