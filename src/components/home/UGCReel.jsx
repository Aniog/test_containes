import React, { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { UGC_REELS } from "@/data/products";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function UGCReel() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 sm:py-28 bg-ivory-200"
      aria-label="From the community"
    >
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <span className="eyebrow">Worn by you</span>
            <h2
              id="reel-title"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mt-3 text-sable"
            >
              In the Quiet Wild
            </h2>
            <p
              id="reel-subtitle"
              className="mt-3 max-w-md text-sm sm:text-base text-taupe font-sans font-light"
            >
              Tag <span className="text-sable">@velmora</span> to be featured in
              our community reel.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex gap-4 sm:gap-6 px-5 sm:px-8 lg:px-12 pb-4 snap-x snap-mandatory">
          {UGC_REELS.map((reel, i) => (
            <li
              key={reel.id}
              className="snap-start flex-shrink-0 w-[60vw] sm:w-[260px] md:w-[280px]"
            >
              <article className="relative aspect-[9/16] overflow-hidden bg-sable group cursor-pointer">
                <img
                  alt={reel.caption}
                  data-strk-img-id={`reel-${reel.id}`}
                  data-strk-img={`[reel-cap-${reel.id}] [reel-title] [reel-subtitle] jewelry worn on ear`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sable/85 via-sable/10 to-sable/20" />

                {/* Play indicator */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-ivory/15 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 text-ivory fill-ivory" />
                </div>

                {/* Reel index */}
                <div className="absolute top-4 left-4 text-[10px] tracking-widest2 uppercase text-ivory/70 font-sans">
                  {String(i + 1).padStart(2, "0")} / {String(UGC_REELS.length).padStart(2, "0")}
                </div>

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p
                    id={`reel-cap-${reel.id}`}
                    className="font-serif italic text-ivory text-xl sm:text-2xl leading-snug"
                  >
                    “{reel.caption}”
                  </p>
                  <p className="mt-3 text-[10px] tracking-widest2 uppercase text-ivory/65 font-sans">
                    {reel.handle}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
