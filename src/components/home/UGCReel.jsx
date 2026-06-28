import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const reels = [
  {
    id: "reel-1",
    caption: "Morning gold",
    subcaption: "Vivid Aura Jewels",
    imgId: "ugc-reel-1-img-a1b2c3",
    titleId: "ugc-reel-1-title",
    descId: "ugc-reel-1-desc",
  },
  {
    id: "reel-2",
    caption: "Layered & loved",
    subcaption: "Majestic Flora Nectar",
    imgId: "ugc-reel-2-img-d4e5f6",
    titleId: "ugc-reel-2-title",
    descId: "ugc-reel-2-desc",
  },
  {
    id: "reel-3",
    caption: "Stack season",
    subcaption: "Golden Sphere Huggies",
    imgId: "ugc-reel-3-img-g7h8i9",
    titleId: "ugc-reel-3-title",
    descId: "ugc-reel-3-desc",
  },
  {
    id: "reel-4",
    caption: "Effortless elegance",
    subcaption: "Amber Lace Earrings",
    imgId: "ugc-reel-4-img-j1k2l3",
    titleId: "ugc-reel-4-title",
    descId: "ugc-reel-4-desc",
  },
  {
    id: "reel-5",
    caption: "The perfect gift",
    subcaption: "Royal Heirloom Set",
    imgId: "ugc-reel-5-img-m4n5o6",
    titleId: "ugc-reel-5-title",
    descId: "ugc-reel-5-desc",
  },
  {
    id: "reel-6",
    caption: "Golden hour",
    subcaption: "Velmora Collection",
    imgId: "ugc-reel-6-img-p7q8r9",
    titleId: "ugc-reel-6-title",
    descId: "ugc-reel-6-desc",
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">
              As Worn
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-white">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-inter text-xs uppercase tracking-widest text-white/60 border-b border-white/30 pb-0.5 hover:text-gold hover:border-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}] gold jewelry worn woman portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={reel.titleId}
                className="font-cormorant text-white text-lg font-light italic leading-tight"
              >
                {reel.caption}
              </p>
              <p
                id={reel.descId}
                className="font-inter text-white/60 text-[10px] uppercase tracking-widest mt-1"
              >
                {reel.subcaption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
