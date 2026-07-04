import React, { useRef } from "react";
import { UGC_REELS } from "@/data/content";
import { useStrkImages } from "@/hooks/useStrkImages";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function UGCReels() {
  const ref = useRef(null);
  useStrkImages(ref);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-ivory border-y border-hairline"
      aria-label="From the community"
    >
      <div className="container-editorial mb-10 md:mb-12">
        <p className="eyebrow">@velmora.fine</p>
        <h2 className="font-serif text-4xl md:text-5xl text-ink mt-3 tracking-[-0.01em] max-w-2xl text-balance">
          Worn by the women who chose it.
        </h2>
        <p className="text-taupe mt-3 max-w-md text-sm md:text-base">
          A scroll through the soft, golden, lived-in moments our community is sharing.
        </p>
      </div>

      <div
        className="overflow-x-auto no-scrollbar"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <ul
          className="flex gap-5 md:gap-7 px-6 md:px-10 lg:px-16 pb-2"
          style={{ width: "max-content" }}
        >
          {UGC_REELS.map((reel) => (
            <li
              key={reel.id}
              className="relative w-[220px] sm:w-[260px] md:w-[280px] aspect-[9/16] overflow-hidden bg-ink flex-shrink-0 group"
              style={{ scrollSnapAlign: "start" }}
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.captionId}] [${reel.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                loading="lazy"
              />
              {/* Vignette + gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/0 to-ink/85" />
              <div className="absolute inset-0 ring-1 ring-inset ring-ink/5" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-cream">
                <p
                  id={reel.titleId}
                  className="font-serif italic text-2xl leading-tight text-balance"
                >
                  {reel.caption}
                </p>
                <p
                  id={reel.captionId}
                  className="mt-2 text-[11px] uppercase tracking-[0.24em] text-cream/80"
                >
                  {reel.handle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
