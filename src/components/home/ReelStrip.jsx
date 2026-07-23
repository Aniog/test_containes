import { useRef } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import { useEffect } from "react";
import strkImgConfig from "@/strk-img-config.json";

const REELS = [
  {
    id: "reel-ear-stack",
    imgId: "reel-ear-stack-1q2w",
    title: "Ear stack",
    caption: "The everyday edit",
    handle: "@velmora",
  },
  {
    id: "reel-flora",
    imgId: "reel-flora-3e4r",
    title: "Flora nectar",
    caption: "Layered in soft light",
    handle: "@mei.luu",
  },
  {
    id: "reel-huggies",
    imgId: "reel-huggies-5t6y",
    title: "Sphere huggies",
    caption: "Sculpted. Polished. Worn.",
    handle: "@avelmorastudio",
  },
  {
    id: "reel-amber",
    imgId: "reel-amber-7u8i",
    title: "Amber lace",
    caption: "Old-world romance",
    handle: "@isabel.mor",
  },
  {
    id: "reel-heirloom",
    imgId: "reel-heirloom-9o0p",
    title: "Heirloom set",
    caption: "The only gift you need",
    handle: "@anniev",
  },
  {
    id: "reel-vivid",
    imgId: "reel-vivid-1a2s",
    title: "Aura cuff",
    caption: "Caught in the sunset",
    handle: "@velmora",
  },
];

export default function ReelStrip() {
  const ref = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  function scrollBy(dx) {
    scrollerRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  }

  return (
    <section
      ref={ref}
      id="ugc-reel"
      className="bg-bone-50 py-20 sm:py-28"
    >
      <div className="container-x">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <p
              id="reel-eyebrow"
              className="text-[11px] font-medium uppercase tracking-widest2 text-espresso/55"
            >
              #WornWithVelmora
            </p>
            <h2
              id="reel-title"
              className="display-serif mt-3 text-3xl sm:text-4xl lg:text-5xl"
            >
              From the community
            </h2>
            <p id="reel-subtitle" className="mt-3 text-sm sm:text-base text-espresso/65 max-w-md">
              Real light, real life — see how our community wears Velmora every day.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 self-end">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-360)}
              className="h-10 w-10 inline-flex items-center justify-center border border-taupe-light text-espresso/70 hover:text-espresso hover:border-espresso transition-colors"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(360)}
              className="h-10 w-10 inline-flex items-center justify-center border border-taupe-light text-espresso/70 hover:text-espresso hover:border-espresso transition-colors"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge scroller */}
      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
      >
        <ul className="flex gap-5 sm:gap-6 px-5 sm:px-8 lg:px-12 pb-2">
          {REELS.map((r, i) => (
            <li
              key={r.id}
              className="relative flex-shrink-0 w-[60vw] sm:w-[260px] lg:w-[280px] aspect-[9/16] overflow-hidden image-placeholder group cursor-pointer reveal"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <img
                alt={r.caption}
                data-strk-img-id={r.imgId}
                data-strk-img={`[reel-caption-${r.id}] [reel-title-${r.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="560"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                loading="lazy"
                className="relative z-10 w-full h-full object-cover transition-transform duration-1000 ease-out-soft group-hover:scale-[1.03]"
              />
              {/* Gradient overlay for caption legibility */}
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.65) 100%)",
                }}
                aria-hidden
              />
              {/* Play badge */}
              <div className="absolute top-4 right-4 z-20 h-9 w-9 rounded-full bg-bone-50/15 backdrop-blur-sm flex items-center justify-center text-bone-50 border border-bone-50/20 group-hover:bg-bone-50/25 transition-colors">
                <Play size={14} strokeWidth={1.5} fill="currentColor" />
              </div>
              {/* Caption */}
              <div className="absolute inset-x-4 bottom-4 z-20">
                <h3
                  id={`reel-title-${r.id}`}
                  className="display-serif italic text-bone-50 text-xl leading-tight"
                >
                  {r.caption}
                </h3>
                <p
                  id={`reel-caption-${r.id}`}
                  className="text-[11px] uppercase tracking-widest2 text-bone-50/75 mt-1.5"
                >
                  {r.handle}
                </p>
              </div>
            </li>
          ))}
          {/* Tail spacer so last card clears the right edge */}
          <li aria-hidden className="flex-shrink-0 w-1" />
        </ul>
      </div>
    </section>
  );
}
