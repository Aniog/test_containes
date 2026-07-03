import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";
import Eyebrow from "../ui/Eyebrow.jsx";

const REELS = [
  {
    id: "reel-ear-stack",
    imgId: "reel-ear-stack-9b2a",
    handle: "@noor.kapoor",
    caption: "Three stacks, one ear.",
    productId: "golden-sphere-huggies",
  },
  {
    id: "reel-floral",
    imgId: "reel-floral-4d8e",
    handle: "@lena.morrow",
    caption: "Wearing the Flora on a Sunday.",
    productId: "majestic-flora-nectar",
  },
  {
    id: "reel-aura",
    imgId: "reel-aura-7c1f",
    handle: "@maya.tan",
    caption: "The cuff that goes everywhere.",
    productId: "vivid-aura-jewels",
  },
  {
    id: "reel-lace",
    imgId: "reel-lace-2a6b",
    handle: "@studio.aria",
    caption: "Dinner, then dancing.",
    productId: "amber-lace-earrings",
  },
  {
    id: "reel-heirloom",
    imgId: "reel-heirloom-5e9c",
    handle: "@june.wears",
    caption: "Gifted and kept forever.",
    productId: "royal-heirloom-set",
  },
  {
    id: "reel-mirror",
    imgId: "reel-mirror-8d3a",
    handle: "@celia.s",
    caption: "Soft gold, dim morning.",
    productId: "golden-sphere-huggies",
  },
  {
    id: "reel-twostack",
    imgId: "reel-twostack-1f4d",
    handle: "@nia.studios",
    caption: "Layered, never loud.",
    productId: "majestic-flora-nectar",
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-ink-900 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow tone="gold">Worn by you</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-[36px] font-light leading-[1.05] text-ink-100 md:text-[48px]">
              From the studio feed.
            </h2>
            <p className="mt-4 max-w-md font-sans text-[14px] leading-relaxed text-ink-300">
              Real customers, real light. Tag{" "}
              <span className="text-gold-300">@velmora</span> for a chance to be
              featured.
            </p>
          </div>
          <span className="font-sans text-[10px] uppercase tracking-widest2 text-ink-500">
            Scroll →
          </span>
        </div>

        <div
          ref={containerRef}
          className="reel-snap no-scrollbar mt-12 -mx-6 flex gap-4 overflow-x-auto px-6 pb-4 md:gap-6 md:-mx-10 md:px-10"
        >
          {REELS.map((reel) => (
            <figure
              key={reel.id}
              className="group relative aspect-[9/16] w-[58vw] flex-shrink-0 overflow-hidden bg-ink-950 sm:w-[260px] md:w-[280px]"
            >
              <img
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.id}-caption] [${reel.id}-handle] [reel-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${reel.handle} wearing Velmora`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950/30 via-transparent to-ink-950/90"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p
                  id={`${reel.id}-caption`}
                  className="font-serif text-[20px] font-light leading-snug text-ink-100"
                >
                  {reel.caption}
                </p>
                <p
                  id={`${reel.id}-handle`}
                  className="mt-3 font-sans text-[10px] uppercase tracking-widest2 text-gold-300"
                >
                  {reel.handle}
                </p>
              </div>
              <span id="reel-section-title" className="hidden">
                Velmora worn by customers
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
