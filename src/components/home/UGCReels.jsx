import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import JewelImage from "@/components/ui/JewelImage";
import { SectionTitle } from "@/components/ui/SectionTitle";

const REELS = [
  { id: "ugc-1", caption: "Everyday gold.", handle: "@noor.v", shape: "model", bg: "velvet" },
  { id: "ugc-2", caption: "Lunch in the lace drops.", handle: "@maya.k", shape: "model", bg: "warm" },
  { id: "ugc-3", caption: "Layered, always.", handle: "@studioelo", shape: "lifestyle", bg: "dusk" },
  { id: "ugc-4", caption: "Slow Sundays.", handle: "@aria.f", shape: "model", bg: "glow" },
  { id: "ugc-5", caption: "First stack complete.", handle: "@thevelmora", shape: "lifestyle", bg: "cream" },
  { id: "ugc-6", caption: "Brunch & huggies.", handle: "@lena.b", shape: "model", bg: "velvet" },
  { id: "ugc-7", caption: "The new heirloom.", handle: "@camille", shape: "lifestyle", bg: "warm" },
];

export default function UGCReels() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-cream-warm">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12">
          <SectionTitle
            eyebrow="Worn by you"
            title="@velmora.fine"
            subtitle="Real moments from our community — share yours with #WornWithVelmora"
            align="left"
          />
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll reels left"
              className="w-10 h-10 border border-hairline flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll reels right"
              className="w-10 h-10 border border-hairline flex items-center justify-center text-ink hover:bg-ink hover:text-cream transition-colors"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0"
        >
          {REELS.map((reel, i) => (
            <article
              key={reel.id}
              className="snap-start flex-none w-[60vw] sm:w-[260px] md:w-[260px] aspect-[9/16] relative overflow-hidden group cursor-pointer"
            >
              <JewelImage
                shape={reel.shape}
                bg={reel.bg}
                alt={`UGC ${reel.handle}`}
                className="absolute inset-0 transition-transform duration-700 ease-velvet group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 reel-overlay" />
              {/* small top dot (reel indicator) */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne dot-pulse" />
                <span className="eyebrow text-[0.55rem] text-cream/80">REELS</span>
              </div>
              {/* text overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                <p className="font-display text-2xl text-cream leading-tight italic">
                  {reel.caption}
                </p>
                <p className="mt-1 eyebrow text-[0.6rem] text-champagne">{reel.handle}</p>
              </div>
              {/* index */}
              <div className="absolute top-4 left-4 z-10 eyebrow text-[0.6rem] text-cream/60">
                {String(i + 1).padStart(2, "0")} / {String(REELS.length).padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
