import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { REELS } from "@/data/site";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

function scrollByAmount(ref, amount) {
  if (!ref.current) return;
  ref.current.scrollBy({ left: amount, behavior: "smooth" });
}

export default function ReelsRow() {
  const trackRef = useRef(null);

  return (
    <section className="py-20 md:py-28 bg-sand/60 border-y border-line">
      <div className="mx-auto max-w-editorial px-5 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-8 md:mb-12">
          <SectionHeader
            eyebrow="Worn by you"
            title="@velmora — on ears, on necks, on golden hours."
            align="left"
          />
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll reels left"
              onClick={() => scrollByAmount(trackRef, -340)}
              className="p-2 border border-line hover:bg-ivory transition-colors"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll reels right"
              onClick={() => scrollByAmount(trackRef, 340)}
              className="p-2 border border-line hover:bg-ivory transition-colors"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge horizontal scroll */}
      <div
        ref={trackRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
      >
        <div className="flex gap-4 md:gap-5 px-5 md:px-10 pb-4">
          {REELS.map((r) => (
            <figure
              key={r.id}
              className="relative flex-shrink-0 w-[58vw] sm:w-[260px] md:w-[280px] aspect-[9/16] overflow-hidden group"
            >
              <img
                alt={r.caption}
                data-strk-img-id={r.imgId}
                data-strk-img={`[${r.captionId}] [${r.titleId}] woman model wearing gold jewelry ear necklace warm light close up`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/10" />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-1 bg-espresso/40 backdrop-blur-sm text-ivory text-[10px] tracking-widest2 uppercase">
                <Play size={10} strokeWidth={2} className="fill-current" />
                Reel
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-ivory">
                <p id={r.titleId} className="sr-only">{r.caption}</p>
                <p id={r.captionId} className="font-serif text-xl md:text-2xl leading-tight">
                  {r.caption}
                </p>
                <p className="mt-1 text-[11px] tracking-widest2 uppercase text-ivory/80">
                  {r.handle}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
