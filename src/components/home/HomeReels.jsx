import React, { useRef } from "react";
import { useStrkImages } from "@/lib/useStrkImages";

// Vertical 9:16 cards imitating an Instagram Reels strip.
const reels = [
  {
    id: "reel-ear-stack-01",
    title: "Ear Stack",
    caption: "The everyday stack",
    imgId: "reel-ear-stack-9b2d",
    query: "Ear Stack gold ear cuff and huggies worn on model ear editorial",
  },
  {
    id: "reel-floral-necklace-02",
    title: "Flora",
    caption: "Layered in soft light",
    imgId: "reel-floral-1f8a",
    query: "Flora crystal necklace worn on model neck editorial portrait",
  },
  {
    id: "reel-huggies-closeup-03",
    title: "Huggies",
    caption: "Polished to a mirror",
    imgId: "reel-huggies-3c6e",
    query: "Golden Sphere Huggies chunky gold earrings worn on model close-up",
  },
  {
    id: "reel-filigree-04",
    title: "Lace",
    caption: "Hand-finished filigree",
    imgId: "reel-lace-7d4b",
    query: "Amber Lace gold filigree drop earrings worn on model editorial",
  },
  {
    id: "reel-heirloom-05",
    title: "Heirloom",
    caption: "Unwrap and remember",
    imgId: "reel-heirloom-5a1c",
    query: "Royal Heirloom gold jewelry set worn on model editorial portrait",
  },
  {
    id: "reel-cuff-detail-06",
    title: "Aura",
    caption: "Caught in the light",
    imgId: "reel-cuff-2e9f",
    query: "Vivid Aura gold ear cuff with crystal worn on model close-up editorial",
  },
];

export default function HomeReels() {
  const ref = useRef(null);
  useStrkImages(ref, [reels.length]);

  return (
    <section ref={ref} className="bg-ivory-100">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Worn By You · @velmora</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-ink-800 text-balance">
              In the Wild
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink-500">
            Tag <span className="text-ink-800">#velmoraworn</span> for a chance
            to be featured.
          </p>
        </div>

        {/* Horizontal reel strip */}
        <div className="no-scrollbar mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:gap-5 md:gap-6">
          {reels.map((r, i) => (
            <article
              key={r.id}
              className="group relative aspect-[9/16] w-[64vw] flex-shrink-0 snap-start overflow-hidden bg-ink-800 sm:w-[260px] md:w-[300px] lg:w-[320px]"
              id={`home-reel-${r.id}`}
            >
              <img
                alt={r.title}
                data-strk-img-id={r.imgId}
                data-strk-img={r.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="640"
                loading={i < 2 ? "eager" : "lazy"}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/0 to-ink-900/0" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-ivory-50">
                <p
                  id={`home-reel-${r.id}-title`}
                  className="font-serif text-2xl leading-tight italic"
                >
                  {r.caption}
                </p>
                <p
                  id={`home-reel-${r.id}-cap`}
                  className="mt-1 font-sans uppercase tracking-widest2 text-[10px] text-ivory-50/85"
                >
                  — {r.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
