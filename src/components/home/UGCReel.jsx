import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ugcReels } from "@/data/products";

export default function UGCReel() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-bone text-espresso py-20 md:py-28 overflow-hidden"
      aria-labelledby="reel-title"
    >
      <div className="max-w-8xl mx-auto px-5 md:px-8 mb-10 md:mb-14 flex items-end justify-between gap-6">
        <div>
          <p id="reel-eyebrow" className="eyebrow mb-3">
            Worn by you
          </p>
          <h2
            id="reel-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl"
          >
            In the wild
          </h2>
        </div>
        <p
          id="reel-subtitle"
          className="hidden md:block text-sm text-espresso/60 max-w-xs text-right"
        >
          Real moments from our community — tagged #velmorafine.
        </p>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex gap-4 md:gap-5 overflow-x-auto pl-5 md:pl-8 pr-8 pb-4 snap-x snap-mandatory"
      >
        {ugcReels.map((reel, i) => (
          <article
            key={reel.id}
            className="relative flex-shrink-0 w-[60vw] sm:w-[260px] md:w-[280px] aspect-[9/16] bg-sand snap-start group cursor-pointer overflow-hidden"
          >
            <img
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[reel-caption-${reel.id}] [reel-title] vertical portrait ${reel.query}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              alt={reel.caption}
              loading={i < 3 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-espresso/80" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
              <p
                id={`reel-caption-${reel.id}`}
                className="font-serif italic text-lg md:text-xl text-ivory leading-tight"
              >
                {reel.caption}
              </p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.28em] text-ivory/65">
                @velmora.fine
              </p>
            </div>
          </article>
        ))}
        {/* trailing spacer for last-card padding */}
        <div className="flex-shrink-0 w-1" aria-hidden="true" />
      </div>
    </section>
  );
}
