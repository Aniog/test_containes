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
    <section ref={containerRef} className="py-16 md:py-20 bg-ivory-dark">
      <div className="px-4 md:px-8 max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-champagne text-xs tracking-widest3 uppercase mb-2">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs text-stone tracking-widest uppercase hover:text-champagne transition-colors hidden md:block"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar px-4 md:px-8 pb-2">
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] rounded-sm overflow-hidden bg-obsidian-light group cursor-pointer"
          >
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={reel.titleId} className="hidden">{reel.caption}</span>
            <span id={reel.descId} className="hidden">{reel.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-ivory text-sm italic leading-tight">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
