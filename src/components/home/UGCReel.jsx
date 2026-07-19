import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { UGC_REEL_IMAGES } from "@/data/realImages";

const REELS = [
  {
    id: "r1",
    img: UGC_REEL_IMAGES[0],
    caption: "Daylight on the lobes.",
    handle: "@noor",
  },
  {
    id: "r2",
    img: UGC_REEL_IMAGES[1],
    caption: "Flora, on collarbones.",
    handle: "@amelia",
  },
  {
    id: "r3",
    img: UGC_REEL_IMAGES[2],
    caption: "The cuff, captured.",
    handle: "@isla",
  },
  {
    id: "r4",
    img: UGC_REEL_IMAGES[3],
    caption: "Lace, lit from within.",
    handle: "@rosie",
  },
  {
    id: "r5",
    img: UGC_REEL_IMAGES[4],
    caption: "The heirloom set.",
    handle: "@marielle",
  },
  {
    id: "r6",
    img: UGC_REEL_IMAGES[5],
    caption: "Slow mornings.",
    handle: "@velmora",
  },
];

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function UGCReel() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow">Worn by You</p>
            <h2
              id="ugc-title"
              className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] text-ink"
            >
              From the Community
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="w-11 h-11 inline-flex items-center justify-center border border-ink/30 hover:border-ink hover:bg-ink hover:text-bone transition-colors duration-300"
              aria-label="Scroll reels left"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="w-11 h-11 inline-flex items-center justify-center border border-ink/30 hover:border-ink hover:bg-ink hover:text-bone transition-colors duration-300"
              aria-label="Scroll reels right"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge scroll track */}
      <div
        ref={trackRef}
        className="reel-track flex gap-4 sm:gap-5 overflow-x-auto px-5 sm:px-8 lg:px-12 pb-4 snap-x snap-mandatory"
        role="list"
      >
        {REELS.map((reel) => (
          <article
            key={reel.id}
            role="listitem"
            className="snap-start shrink-0 w-[68vw] sm:w-[280px] md:w-[300px] aspect-[9/16] relative overflow-hidden bg-ink text-bone"
          >
            <img
              alt={reel.caption}
              src={reel.img}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-transparent to-ink/70" />

            {/* Top right: tiny play badge */}
            <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 bg-bone/95 text-ink text-[9px] uppercase tracking-[0.18em] font-medium">
              <svg
                className="w-2.5 h-2.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Reel
            </div>

            {/* Bottom: caption overlay */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <p className="font-serif italic text-2xl sm:text-3xl font-light leading-snug">
                {reel.caption}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-bone/70">
                {reel.handle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
