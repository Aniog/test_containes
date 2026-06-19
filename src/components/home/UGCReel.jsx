import React, { useEffect, useRef } from "react";
import { Play, Instagram } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Reel-style UGC strip. Horizontal scroll of 9:16 cards, soft serif caption.
 * Mimics an Instagram Reels strip — vertical aspect, plays-button overlay.
 */
const REELS = [
  {
    id: "reel-1",
    handle: "@lina.everyday",
    caption: "The huggies I never take off",
    productHint: "Golden Sphere Huggies",
  },
  {
    id: "reel-2",
    handle: "@maya.studios",
    caption: "Layered, lit, loved",
    productHint: "Majestic Flora Nectar",
  },
  {
    id: "reel-3",
    handle: "@rosa.daily",
    caption: "A whisper of gold",
    productHint: "Vivid Aura Jewels",
  },
  {
    id: "reel-4",
    handle: "@kira.gold",
    caption: "Brunch & filigree",
    productHint: "Amber Lace Earrings",
  },
  {
    id: "reel-5",
    handle: "@annabelle",
    caption: "The everyday heirloom",
    productHint: "Royal Heirloom Set",
  },
  {
    id: "reel-6",
    handle: "@noor.daily",
    caption: "Stacked with intention",
    productHint: "Golden Sphere Huggies",
  },
];

export function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      className="bg-sand py-20 md:py-28"
      aria-labelledby="ugc-title"
    >
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-10 mb-10 md:mb-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="eyebrow text-muted mb-4">From the @velmora community</p>
            <h2
              id="ugc-title"
              className="text-display text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] text-espresso"
            >
              Worn <span className="text-display-italic">in the</span> Wild.
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 eyebrow text-ink hover:text-gold-deep transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" strokeWidth={1.5} />
            Follow @velmora
          </a>
        </div>
      </div>

      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        <ul className="flex gap-4 md:gap-6 px-5 md:px-8 lg:px-10 pb-4 w-max">
          {REELS.map((reel) => (
            <li
              key={reel.id}
              className="snap-start shrink-0 w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px]"
            >
              <ReelCard reel={reel} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ReelCard({ reel }) {
  const imgId = `ugc-${reel.id}-img`;
  return (
    <article className="group">
      <div className="relative aspect-[9/16] overflow-hidden bg-espresso shadow-soft">
        <img
          id={imgId}
          alt={`${reel.handle} wearing ${reel.productHint}`}
          loading="lazy"
          data-strk-img-id={imgId}
          data-strk-img={`velmora fine jewelry model wearing ${reel.productHint} ${reel.caption} vertical portrait editorial`}
          data-strk-img-ratio="9x16"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-105"
        />
        {/* Gradient for caption */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent" />
        {/* Play icon */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ivory/15 backdrop-blur-sm border border-ivory/30 flex items-center justify-center">
          <Play
            className="w-3.5 h-3.5 text-ivory fill-ivory ml-0.5"
            strokeWidth={0}
          />
        </div>
        {/* Caption block */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
          <p className="font-serif italic text-ivory text-[1.125rem] md:text-[1.25rem] leading-[1.35] mb-2">
            &ldquo;{reel.caption}.&rdquo;
          </p>
          <p className="eyebrow-sm text-ivory/80">{reel.handle}</p>
        </div>
      </div>
    </article>
  );
}