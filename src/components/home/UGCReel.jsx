import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { UGC_REELS } from "@/data/products";

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-ink text-bone py-20 md:py-28"
    >
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="eyebrow text-gold-soft">@velmora.jewelry</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl font-light text-bone leading-[1.05]">
              Worn by you
            </h2>
          </div>
          <p className="font-sans text-sm text-bone/70 max-w-sm">
            Tag us in your Velmora moments. A few of our recent favorites
            from the community.
          </p>
        </div>
      </div>

      {/* Reel strip — bleeds full width */}
      <div className="overflow-x-auto reel-scroll scrollbar-hairline">
        <ul className="flex gap-4 md:gap-5 px-5 md:px-8 lg:px-12 pb-4">
          {UGC_REELS.map((reel) => (
            <li
              key={reel.id}
              className="relative flex-shrink-0 w-[180px] sm:w-[210px] md:w-[240px] aspect-[9/16] bg-warm-radial-soft overflow-hidden group"
            >
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={reel.imgQuery}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.04]"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <span
                id={reel.titleId}
                className="absolute left-0 right-0 bottom-5 px-5 text-center font-serif italic text-bone text-lg leading-snug text-balance"
              >
                {reel.caption}
              </span>
            </li>
          ))}
          {/* trailing pad so last card can be centered comfortably */}
          <li aria-hidden className="flex-shrink-0 w-1" />
        </ul>
      </div>
    </section>
  );
}
