import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const UGC_ITEMS = [
  {
    id: "ugc-1",
    imgId: "ugc-img-1-a1b2c3",
    titleId: "ugc-1-title",
    descId: "ugc-1-desc",
    caption: "Golden hour, golden ears",
    handle: "@amelie.w",
  },
  {
    id: "ugc-2",
    imgId: "ugc-img-2-d4e5f6",
    titleId: "ugc-2-title",
    descId: "ugc-2-desc",
    caption: "My everyday stack",
    handle: "@sofia.r",
  },
  {
    id: "ugc-3",
    imgId: "ugc-img-3-g7h8i9",
    titleId: "ugc-3-title",
    descId: "ugc-3-desc",
    caption: "The gift I gave myself",
    handle: "@nadia.k",
  },
  {
    id: "ugc-4",
    imgId: "ugc-img-4-j0k1l2",
    titleId: "ugc-4-title",
    descId: "ugc-4-desc",
    caption: "Layered & luminous",
    handle: "@claire.m",
  },
  {
    id: "ugc-5",
    imgId: "ugc-img-5-m3n4o5",
    titleId: "ugc-5-title",
    descId: "ugc-5-desc",
    caption: "Brunch-ready always",
    handle: "@isabelle.t",
  },
  {
    id: "ugc-6",
    imgId: "ugc-img-6-p6q7r8",
    titleId: "ugc-6-title",
    descId: "ugc-6-desc",
    caption: "Quiet luxury, loud confidence",
    handle: "@maya.v",
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-linen py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
          As Worn
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet tracking-wide">
          The Velmora Edit
        </h2>
      </div>

      {/* Horizontal scroll strip */}
      <div className="ugc-scroll flex gap-3 md:gap-4 overflow-x-auto px-4 md:px-8 pb-4 snap-x snap-mandatory">
        {UGC_ITEMS.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 snap-start overflow-hidden group cursor-pointer"
            style={{ aspectRatio: "9/16" }}
          >
            {/* Background image */}
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image context */}
            <span id={item.titleId} className="sr-only">{item.caption} gold jewelry worn on woman</span>
            <span id={item.descId} className="sr-only">woman wearing gold earrings necklace jewelry close up portrait editorial</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velvet/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-sm italic text-ivory leading-snug">
                {item.caption}
              </p>
              <p className="font-sans text-[10px] text-champagne/70 mt-1">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
