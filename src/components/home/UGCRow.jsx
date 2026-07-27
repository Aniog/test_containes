import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const ugcItems = [
  {
    id: "ugc-1",
    imgId: "ugc-1-img-a1b2c3",
    titleId: "ugc-1-title",
    descId: "ugc-1-desc",
    caption: "Golden hour glow",
    sub: "Vivid Aura Jewels",
    desc: "gold ear cuff crystal earring worn on ear close up",
  },
  {
    id: "ugc-2",
    imgId: "ugc-2-img-b2c3d4",
    titleId: "ugc-2-title",
    descId: "ugc-2-desc",
    caption: "Effortless layers",
    sub: "Majestic Flora Nectar",
    desc: "floral crystal necklace worn on neck editorial",
  },
  {
    id: "ugc-3",
    imgId: "ugc-3-img-c3d4e5",
    titleId: "ugc-3-title",
    descId: "ugc-3-desc",
    caption: "Sunday best",
    sub: "Golden Sphere Huggies",
    desc: "gold huggie earrings worn on ear close up portrait",
  },
  {
    id: "ugc-4",
    imgId: "ugc-4-img-d4e5f6",
    titleId: "ugc-4-title",
    descId: "ugc-4-desc",
    caption: "Dressed in gold",
    sub: "Amber Lace Earrings",
    desc: "gold filigree drop earrings worn editorial portrait",
  },
  {
    id: "ugc-5",
    imgId: "ugc-5-img-e5f6g7",
    titleId: "ugc-5-title",
    descId: "ugc-5-desc",
    caption: "The perfect gift",
    sub: "Royal Heirloom Set",
    desc: "jewelry gift set earrings necklace luxury box",
  },
  {
    id: "ugc-6",
    imgId: "ugc-6-img-f6g7h8",
    titleId: "ugc-6-title",
    descId: "ugc-6-desc",
    caption: "Minimal & modern",
    sub: "Vivid Aura Jewels",
    desc: "minimalist gold jewelry worn on woman portrait",
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-parchment overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">
              Real Women, Real Glow
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-inter text-xs uppercase tracking-[0.15em] text-taupe border-b border-taupe pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: "9/16" }}
          >
            {/* Image */}
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.sub}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-cormorant text-base italic font-light text-cream leading-tight">
                {item.caption}
              </p>
              <p className="font-inter text-[10px] uppercase tracking-[0.1em] text-cream/70 mt-1">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
