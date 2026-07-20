import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { ugcItems } from "../../data/products";

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-sans uppercase tracking-widest text-gold mb-2">
              As Seen On
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="text-xs font-sans uppercase tracking-widest text-taupe hover:text-gold transition-colors duration-300 border-b border-taupe/30 hover:border-gold pb-0.5 hidden md:block"
          >
            @velmora →
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar px-4 md:px-8 pb-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 overflow-hidden group"
            style={{ scrollSnapAlign: "start", aspectRatio: "9/16" }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={item.titleId}
                className="font-serif text-sm italic font-light text-ivory leading-tight mb-0.5"
              >
                {item.caption}
              </p>
              <p className="text-[10px] font-sans uppercase tracking-widest text-ivory/70">
                {item.product}
              </p>
            </div>

            {/* Hidden desc for image query */}
            <span id={item.descId} className="hidden">{item.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
