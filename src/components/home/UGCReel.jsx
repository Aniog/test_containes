import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ugcReels } from "@/data/products";

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-espresso font-light">
              Real Women, Real Jewelry
            </h2>
          </div>
          <p className="hidden md:block text-xs font-sans uppercase tracking-widest text-stone">
            @velmorajewelry
          </p>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group"
            style={{ scrollSnapAlign: "start", aspectRatio: "9/16" }}
          >
            {/* Image */}
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.titleId}] gold jewelry worn on model ear neck`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={reel.titleId}
                className="font-serif text-sm text-cream italic leading-tight"
              >
                "{reel.caption}"
              </p>
              <p className="text-[10px] font-sans text-cream/60 mt-1 uppercase tracking-widest">
                {reel.handle}
              </p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute top-3 right-3 opacity-60">
              <div className="w-6 h-6 rounded-full bg-cream/20 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-cream ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
