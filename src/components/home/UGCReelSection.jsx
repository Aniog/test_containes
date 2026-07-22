import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ugcItems } from "@/data/products";

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-cream-white border-t border-taupe">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-manrope text-[10px] uppercase tracking-widest text-gold mb-2">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs uppercase tracking-widest text-warm-gray hover:text-gold transition-colors hidden md:block"
          >
            @velmora
          </a>
        </div>

        {/* Horizontal scroll reel */}
        <div
          ref={containerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-44 md:w-52 group cursor-pointer"
            >
              {/* 9:16 aspect ratio card */}
              <div className="relative overflow-hidden bg-taupe" style={{ aspectRatio: "9/16" }}>
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] gold jewelry worn on model`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src={SVG_PLACEHOLDER}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p
                    id={item.titleId}
                    className="font-cormorant text-sm italic text-ivory leading-tight"
                  >
                    {item.caption}
                  </p>
                </div>

                {/* Play icon overlay */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-7 h-7 rounded-full bg-ivory/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-ivory ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
